import { stopSubmit } from "redux-form";
import { usersAPI } from "../API/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const thunkAuthCreator = () => async (dispatch) => {
  let data = await usersAPI.authGet();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await usersAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(thunkAuthCreator());
  } else {
    dispatch(stopSubmit("login", { _error: "e-mail or password is wrong" }));
  }
};

export const logout = () => async (dispatch) => {
  let data = await usersAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
