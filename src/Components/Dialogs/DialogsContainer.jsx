import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state)=>{
    return{
        dialogsPage:state.dialogsPage, 
        isAuth: state.auth.isAuth,
    };
}
let mapDispatchToProps = (dispatch)=>{
    return{
        onSendMessageClick:()=>{dispatch(actionCreatorSendMessage())},
        onNewMessageChange:(body)=>{dispatch(actionCreatorUpdateNewMessage(body))}
    };
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;