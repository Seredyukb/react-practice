import { connect } from "react-redux";
import React from "react";
import { follow, unfollow, setCurrentPage,  toggleIsFollow, thunkGetUsersFirstCreator,thunkGetUsersOnPageChangedCreator, thunkFollowCreator, thunkUnfollowCreator } from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/preloader";
import { Redirect } from "react-router";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getCurrenPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/users-selectors";

class UsersContainer extends React.Component{
    componentDidMount(){  
        this.props.thunkGetUsersFirstCreator(this.props.currentPage, this.props.pageSize); 
    //     this.props.toggleIsFetching(true);
    //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    // })
};
    onPageChanged = (pageNumber)=> {
        this.props.thunkGetUsersOnPageChangedCreator(pageNumber, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data=>{
        // this.props.toggleIsFetching(false);
        // this.props.setUsers(data.items);
        // })
    }
    
render(){
    if(!this.props.isAuth){
        return <Redirect to='/Login'/>
    }

    return <>
    {this.props.isFetching? <Preloader/> :null}
    <Users totalUsersCount={this.props.totalUsersCount}
     pageSize={this.props.pageSize} 
     currentPage={this.props.currentPage} 
     onPageChanged={this.onPageChanged} 
     users={this.props.users} 
     follow={this.props.follow} 
     unfollow={this.props.unfollow}
     toggleIsFollow={this.props.toggleIsFollow}
     followingInProgress={this.props.followingInProgress}
     thunkFollowCreator={this.props.thunkFollowCreator}     
     thunkUnfollowCreator={this.props.thunkUnfollowCreator}     
     
     />
     </>
}
}

let mapStateToProps = (state)=> {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrenPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        
    }
}
// let mapDispatchToProps = (dispatch)=> {
//     return{
//         follow:(usersId)=>{dispatch(follow(usersId))} ,
//         unfollow: (usersId)=>{dispatch(unfollow(usersId))},
//         setUsers: (users)=>{dispatch(setUsers(users))},
//         setCurrentPage: (pageNumber)=>{dispatch(setCurrentPage(pageNumber))},
//         setTotalUsersCount: (totalUsersCount)=>{dispatch(setTotalUsersCount(totalUsersCount))},
//         toggleIsFetching: (isFetching)=>{dispatch(toggleIsFetching(isFetching))}
//     }
// }


export default compose(
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleIsFollow, thunkGetUsersFirstCreator, thunkGetUsersOnPageChangedCreator, thunkFollowCreator, thunkUnfollowCreator}),
    WithAuthRedirect
)(UsersContainer)