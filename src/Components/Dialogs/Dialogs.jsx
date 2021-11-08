import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
    let newDialogsResult = props.dialogsPage.dialogsData.map(el => {
        return <DialogItem id={el.id} name={el.name} ava={el.ava} />

    })


    let newMessagesResult = props.dialogsPage.dialogsData.map(m => {
        return <Message message={m.message} newMessageText={props.dialogsPage.newMessageText} />
    })
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
        </div>
    )
}
export default Dialogs;