import { actionCreatorSendMessage, actionCreatorUpdateNewMessage } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);



