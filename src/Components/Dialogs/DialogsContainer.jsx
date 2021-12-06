import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";

let mapStateToProps = (state)=>{
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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;