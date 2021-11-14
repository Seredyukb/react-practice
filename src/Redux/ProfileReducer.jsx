const ADD_POST = 'addPosta';
const UPDATE_NEW_POST_TEXT = 'updateNewPosta';

const profileReducer = (state, action) => {
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