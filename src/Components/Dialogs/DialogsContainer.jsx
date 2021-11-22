import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                let newMessageBody = state.newMessageBody;
                let onSendMessageClick = () => {
                    store.dispatch(actionCreatorSendMessage());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(actionCreatorUpdateNewMessage(body));
                }
                return <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} newMessageBody={newMessageBody} dialogsData={state.dialogsData} />
            }}

        </StoreContext.Consumer>)
}
export default DialogsContainer;