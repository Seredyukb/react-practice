import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../Redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch)=> {
    return{
        follow:(usersId)=>{dispatch(followAC(usersId))} ,
        unfollow: (usersId)=>{dispatch(unfollowAC(usersId))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber)=>{dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalUsersCount)=>{dispatch(setTotalUsersCountAC(totalUsersCount))}
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer;