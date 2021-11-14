const SEND_MESSAGE = 'sendMessageText';
const UPDATE_NEW_MESSAGE_TEXT = 'updateNewMessageText';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            state.dialogsData.push({
                id: state.dialogsData.lenth + 1,
                message: state.newMessageBody,
            });
            state.newMessageBody = '';
        default:
            return state;;
    }
}



export const actionCreatorUpdateNewMessage = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })
export const actionCreatorSendMessage = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;