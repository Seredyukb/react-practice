import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../Utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW = "TOGGLE_IS_FOLLOW";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: updateObjectInArray(state.users, action.usersId, "id", {
          followed: true,
        }),
        //refactoring DRY
        // state.users.map((u) => {
        //   if (u.id === action.usersId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };

      return stateCopy;
    }
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: updateObjectInArray(state.users, action.usersId, "id", {
          followed: false,
        }),
        //refactoring DRY
        // state.users.map((u) => {
        //   if (u.id === action.usersId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
      };
      return stateCopy;
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOW: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default: {
      return state;
    }
  }
};
export const follow = (usersId) => ({ type: FOLLOW, usersId: usersId });
export const unfollow = (usersId) => ({ type: UNFOLLOW, usersId: usersId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleIsFollow = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOW,
  isFetching,
  userId,
});
//refactoring DRY
const followUnfollowFlow = async (dispatch, id, actionCreator, apiMethod) => {
  dispatch(toggleIsFollow(true, id));
  let data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleIsFollow(false, id));
};
export const thunkGetUsersFirstCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
export const thunkGetUsersOnPageChangedCreator =
  (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  };
export const thunkFollowCreator = (id) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    id,
    unfollow,
    usersAPI.unfollowDelete.bind(usersAPI)
  );
};
export const thunkUnfollowCreator = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, follow, usersAPI.followPost.bind(usersAPI));
};

export default UsersReducer;
