import React from "react";
import { connect } from "react-redux";
import Header from "./Header"
import { setAuthUserData } from "../../Redux/Auth-reducer";
import { usersAPI } from "../../API/api";

class HeaderContainer extends React.Component{
    componentDidMount(){
        usersAPI.authGet().then(data=>{
            
        if(data.resultCode === 0){
            // let {id, login, email} = response.data.data;
            let id = data.data.id;
            let login = data.data.login;
            let email = data.data.email;

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