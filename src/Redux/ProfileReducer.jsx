const ADD_POST = 'addPosta';
const UPDATE_NEW_POST_TEXT = 'updateNewPosta';

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

}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPosta = {
                id: state.postData.length + 1,
                message: state.newPostText,
                count: 0,
            }
            state.postData.push(newPosta);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            let newText = action.newText;
            state.newPostText = newText;
            return state;
        default:
            return state;
    }
}


export const actionCreatorUpdateNewPosta = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const actionCreatorAddPosta = () => ({ type: ADD_POST });


export default profileReducer;