import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './ProfileForm.module.css';

const PasswordForm = ({id}) => {

  let navigate = useHistory();

  const passwordInputRef = useRef();

  const submitHandler = (event) =>{
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;
  
    let url;

    if(id != ''){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCGevo_cp7rWRF1Xwig_8YrcyLFbGkz17s';
    }
  
    fetch (url ,
      {
        method: 'POST',
        body: JSON.stringify({
            idToken: id,
            password: enteredPassword,
            returnSecureToken: true
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then ( res => {
        if(res.ok) {
        return res.json();
        }else{
          return res.json ().then((data) => {
          let errorMessage = 'Could not change password';
        
          throw new Error( errorMessage);
          });
        }
      }).then( (data) => {
        navigate.push("/profile")
      }).catch (err => {
        alert (err.message);
      });
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' required ref = {passwordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default PasswordForm;