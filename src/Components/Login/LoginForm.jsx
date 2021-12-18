import React from "react";
import { Field, reduxForm } from 'redux-form'
import { required } from "../../Utils/Validators/validators";
import {Input} from '../Common/FormsControls/FormsControls'

let  LoginForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' component={Input} type='text' placeholder='E-mail' validate={[required]}/>
            </div>
            <div>
                <Field name='password' component={Input} type='password' placeholder='password' validate={[required]}/>
            </div>
            <div>
                <label>
                <Field name='rememberMe' component={Input} type='checkbox' validate={[required]}/>
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