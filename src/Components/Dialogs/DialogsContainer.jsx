import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state)=>{
    debugger;
    return{
        dialogsPage:state.dialogsPage, 
    };
}
let mapDispatchToProps = (dispatch)=>{
    return{
        onSendMessageClick:()=>{dispatch(actionCreatorSendMessage())},
        onNewMessageChange:(body)=>{dispatch(actionCreatorUpdateNewMessage(body))}
    };
}



const superDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default superDialogsContainer;