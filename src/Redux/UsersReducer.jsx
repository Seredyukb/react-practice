const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
}



const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            let stateCopy = {...state,
                users: state.users.map(u => {
                    if(u.id === action.usersId){ 
                        return {...u, followed : true};
                       }
                       return u;
                })
            };

            return stateCopy;
        }
        case UNFOLLOW:{
            let stateCopy = {
                ...state, 
                users: state.users.map(u=>{
                    if(u.id === action.usersId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:{
            return state;
        }
    }
}


export const followAC = (usersId) => ({ type: FOLLOW, usersId: usersId })
export const unfollowAC = (usersId) => ({ type: UNFOLLOW, usersId: usersId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });


export default UsersReducer;