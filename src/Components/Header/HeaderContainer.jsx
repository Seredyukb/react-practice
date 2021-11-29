import axios from "axios"
import React from "react";
import { connect } from "react-redux";
import Header from "./Header"
import { setAuthUserData } from "../../Redux/Auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response=>{
            
            debugger;
        if(response.data.resultCode === 0){
            // let {id, login, email} = response.data.data;
            let id = response.data.data.id;
            let login = response.data.data.login;
            let email = response.data.data.email;

            this.props.setAuthUserData(id, login, email);
        }
        
       
    })

    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId,
    email: state.auth.email,

})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);