import { useState } from 'react';
import AuthForm from '../components/Auth/AuthForm';

const AuthPage = ({setIDT}) => {

  const idToken = id => {
    setIDT(id);
  }
 
  return(<AuthForm setIdtoken = {idToken}/>);
};

export default AuthPage;
