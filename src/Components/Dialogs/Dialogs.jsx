import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import {TextArea} from "../Common/FormsControls/FormsControls";
import { MaxLength100, MinLength2, required } from "../../Utils/Validators/validators";
const Dialogs = (props) => {
    let state = props.dialogsPage;
    let newDialogsResult = state.dialogsData.map(el => {

        return <DialogItem id={el.id} name={el.name} ava={el.ava} />

    })

    let newMessagesResult = state.dialogsData.map(m => {
        return <Message message={m.message} dispatch={props.dispatch} />
    })
    
    let onSendMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody);


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
                <div>
                    <AddMessageFormRedux onSubmit={onSendMessage}/>
                </div>
               
            </div>
        </div>
    )

            }
    const dialogsForm = (props)=>{
        return (
            <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={TextArea} placeholder='Enter your message' name='newMessageBody' validate={[required, MinLength2, MaxLength100]}/>
            </div>
        
        <div>
            <button>Send</button>
        </div>
        </form>
        )
    }

    const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(dialogsForm)

export default Dialogs;