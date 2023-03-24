import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])


  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
};

export default SignInAndSignUp;