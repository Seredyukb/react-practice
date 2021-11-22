import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        debugger;

        props.store.dispatch(actionCreatorSendMessage());


    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(actionCreatorUpdateNewMessage(body));
    }

    return (
        <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} newMessageBody={newMessageBody} dialogsData={state.dialogsData} />
    )
}
export default DialogsContainer;