import React, { useState } from 'react';

import './sign-in.styles.scss';

import './../form-input/form-input.component';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { login } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';

const  SignIn =()=> {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const dispatch = useDispatch()
  const {loading, error}=useSelector((state)=>state.user)

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      dispatch(login({email, password}))
      // await auth.signInWithEmailAndPassword(email, password);
      
    } catch(error) {
      console.log(error);
    }
  }

 const  handleChange = (event) => {
    const {value, name} = event.target;
    if(name==='email'){
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>
        {loading ? <h5>loading...</h5>: null}
        {!!error ? <h5 style={{color:'red'}} id="login-error">{error}</h5>: null}
        <form onSubmit={handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            handleChange={handleChange} 
            value={email} 
            label="Email" 
            required />
          <FormInput 
            name="password" 
            type="password" 
            handleChange={handleChange} 
            value={password} 
            label="Password" 
            required />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            
          </div>
        </form>
      </div>
    );
  
}


export default SignIn;