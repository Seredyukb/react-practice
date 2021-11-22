const SEND_MESSAGE = 'sendMessageText';
const UPDATE_NEW_MESSAGE_TEXT = 'updateNewMessageText';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dimych',
            ava: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg',
            message: 'Hi'
        },
        {
            id: 2,
            name: 'Nadia',
            ava: 'https://klike.net/uploads/posts/2019-06/1560150840_2.jpg',
            message: 'How r u?'
        },
        {
            id: 3,
            name: 'Gle',
            ava: 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png',
            message: 'what is the different between me and u?'
        },
        {
            id: 4,
            name: 'Lia',
            ava: 'https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg',
            message: 'What does it mean Bro???'
        },

    ],
    newMessageBody: '',

}

const dialogsReducer = (state = initialState, action) => {
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