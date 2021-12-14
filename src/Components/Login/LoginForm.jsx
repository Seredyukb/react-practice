import React from "react";
import { Field, reduxForm } from 'redux-form'

let  LoginForm = (props)=>{
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
            <div>
                <Field name='Login' component='input' type='text' placeholder='login'/>
            </div>
            <div>
                <Field name='Password' component='input' type='text' placeholder='password'/>
            </div>
            <div>
                <label>
                <Field name='Check' component='input' type='checkbox'/>
                Remember me
                </label>
            </div>
            <div>
                <button>LogIn</button>
            </div>
        </form>
   
}

LoginForm = reduxForm({
    form: 'login'
  })(LoginForm)

export default LoginForm;