import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../Redux/UsersReducer";
import Users from "./Users";
import preloader from "../Common/Preloader/preloader";
import Preloader from "../Common/Preloader/preloader";

class UsersContainer extends React.Component{
    componentDidMount(){  
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response=>{
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    })};
    onPageChanged = (pageNumber)=> {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response=>{
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        })
    }
    
render(){
    

    return <>
    {this.props.isFetching? <Preloader/> :null}
    <Users totalUsersCount={this.props.totalUsersCount}
     pageSize={this.props.pageSize} 
     currentPage={this.props.currentPage} 
     onPageChanged={this.onPageChanged} 
     users={this.props.users} 
     follow={this.props.follow} 
     unfollow={this.props.unfollow} />
     </>
}
}

let mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
let mapDispatchToProps = (dispatch)=> {
    return{
        follow:(usersId)=>{dispatch(followAC(usersId))} ,
        unfollow: (usersId)=>{dispatch(unfollowAC(usersId))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber)=>{dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalUsersCount)=>{dispatch(setTotalUsersCountAC(totalUsersCount))},
        toggleIsFetching: (isFetching)=>{dispatch(toggleIsFetchingAC(isFetching))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)