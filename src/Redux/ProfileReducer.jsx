import { usersAPI } from "../API/api";

const ADD_POST = 'addPosta';
const UPDATE_NEW_POST_TEXT = 'updateNewPosta';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postData: [
        {
            id: 1,
            message: 'Hello, how r u?',
            count: 15,
        },
        {
            id: 2,
            message: 'Do you love me?',
            count: 20,
        },

    ],
    newPostText: 'IT-Kamasutra',
    profile: null,

}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_POST:{
            let stateCopy={...state};
            let newPosta = {
                id: stateCopy.postData.length + 1,
                message: stateCopy.newPostText,
                count: 0,
            }
            stateCopy.postData=[...state.postData];
            stateCopy.postData.push(newPosta);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy={...state};
            let newText = action.newText;
            stateCopy.newPostText = newText;
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:{
            return state;
        }
    }
}


export const actionCreatorUpdateNewPosta = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const actionCreatorAddPosta = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const thunkGetProfile = (userId)=>{
    return (dispatch)=>{
       usersAPI.getProfile(userId).then(response=>{
       dispatch(setUserProfile(response.data))
    })
    }
}




export default profileReducer;