import { useRef } from 'react';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef(); 

  const addUserHandler = (event) =>{
    event.preventDefault();
  
    const enteredName = nameInputRef.current.value;
    const enteredId = idInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    
    let url = 'https://reactexc3-default-rtdb.firebaseio.com/';
    
    fetch (url + enteredId + '.json',
      {
        method: 'PUT',
        body: JSON.stringify({
          name: enteredName,
          idNumber: enteredId,
          address: enteredAddress,
          phoneNumber: enteredPhone,
          email: enteredEmail,
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
          throw new Error(data);
          });
        }
      }).then( (data) => {
        console.log(data);
      }).catch (err => {
        console.log(err);
      });
  }

  return (
    <form className={classes.form} onSubmit={addUserHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>Name</label>
        <input type='text' id='name' required ref = {nameInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='new-password'>Id Number</label>
        <input type='text' id='idNumber' required ref = {idInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='new-password'>Address</label>
        <input type='text' id='address' required ref = {addressInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='new-password'>Phone Number</label>
        <input type='text' id='phoneNumber' required ref = {phoneInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='new-password'>Email</label>
        <input type='email' id='email' required ref = {emailInputRef}/>
      </div>
      <div className={classes.action}>
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
}

export default ProfileForm;
