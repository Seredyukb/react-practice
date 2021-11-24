import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch)=> {
    return{
        follow:(usersId)=>{dispatch(followAC(usersId))} ,
        unfollow: (usersId)=>{dispatch(unfollowAC(usersId))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer;