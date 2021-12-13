import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { thunkGetProfile, thunkGetStatus, thunkUpdateStatus} from '../../Redux/ProfileReducer'
import { withRouter } from "react-router";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=21081;
        }
        this.props.thunkGetProfile(userId)
        this.props.thunkGetStatus(userId)
    }

    render(){
        return (

            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} thunkUpdateStatus={this.props.thunkUpdateStatus}/>
            </div>
        )
    }
}



let mapStateToProps = (state)=>({
profile: state.profilePage.profile,
status: state.profilePage.status,
})

export default compose (
    connect (mapStateToProps, {thunkGetProfile, thunkGetStatus, thunkUpdateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
