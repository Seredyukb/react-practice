import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/State";
const Dialogs = (props) => {
    let textAreaDialogsRef = React.createRef();
    let state = props.store.getState().dialogsPage;
    let newDialogsResult = state.dialogsData.map(el => {

        return <DialogItem id={el.id} name={el.name} ava={el.ava} />

    })

    let newMessagesResult = state.dialogsData.map(m => {
        return <Message message={m.message} dispatch={props.dispatch} />
    })
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        debugger;

        props.store.dispatch(actionCreatorSendMessage());
        textAreaDialogsRef.current.value = '';


    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(actionCreatorUpdateNewMessage(body));
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {newDialogsResult}
                {/* <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} /> */}
            </div>
            <div className={classes.messages}>
                {newMessagesResult}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} /> */}
            </div>
            <div>
                <div>
                    <textarea placeholder='Enter your message' ref={textAreaDialogsRef} onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}></button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;