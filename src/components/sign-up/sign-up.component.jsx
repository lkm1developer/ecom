import React, { useState } from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signup } from '../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';

import './sign-up.styles.scss';

const SignUp = () => {
  const dispatch = useDispatch()
  const { loadingSignup, errorSignup } = useSelector((state) => state.user)

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = async event => {
    const { name, value } = event.target;

    setState((oldState) => ({
      ...oldState,
      [name]: value
    }));
  }

  const handleSubmit = async event => {
    event.preventDefault();

    const { name, email, password } = state;


    try {
      const payload = state;
      delete payload.confirmPassword
      dispatch(signup(payload))
    } catch (error) {
      console.error(error);
    }
  }



  const { name, email, password, confirmPassword } = state;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email</span>
      {loadingSignup ? <h5>loading...</h5> : null}
      {!!errorSignup ? <h5 style={{ color: 'red' }} id="login-error">{errorSignup}</h5> : null}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
      
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );

}


export default SignUp;