import React from "react";
import { Field, reduxForm } from 'redux-form'
import { required } from "../../Utils/Validators/validators";
import {Input} from '../Common/FormsControls/FormsControls'

let  LoginForm = (props)=>{
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
            <div>
                <Field name='Login' component={Input} type='text' placeholder='login' validate={[required]}/>
            </div>
            <div>
                <Field name='Password' component={Input} type='text' placeholder='password' validate={[required]}/>
            </div>
            <div>
                <label>
                <Field name='Check' component={Input} type='checkbox' validate={[required]}/>
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