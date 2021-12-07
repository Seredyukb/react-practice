import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { thunkGetProfile} from '../../Redux/ProfileReducer'
import { withRouter } from "react-router";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=2;
        }
        this.props.thunkGetProfile(userId)
    }

    render(){
        return (

            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let mapStateToProps = (state)=>({
profile: state.profilePage.profile,
})

export default compose (
    connect (mapStateToProps, {thunkGetProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
