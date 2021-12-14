import React from "react";
import LoginForm from "./LoginForm";

const Login =(props)=>{
    let submit = values => {
        console.log(values)}
return <div>
    <LoginForm onSubmit={submit}/>
</div>
}

export default Login;