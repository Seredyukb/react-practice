import React from "react";
import classes from './../Dialogs.module.css';


const Message = (props) => {
    let answer = React.createRef();
    let addAnswer = () => {
        let textAnswer = answer.current.value;
        alert(textAnswer);

    }
    return (<div>
        <div className={classes.message}>
            {props.message}
        </div>
        <textarea ref={answer}></textarea>
        <div>
            <button onClick={addAnswer}>Ответить</button>
        </div>
    </div>

    )
}

export default Message;