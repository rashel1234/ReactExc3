import { useState, useRef } from 'react';
import classes from './SearchForm.module.css';

const SearchForm = () => {
  const [userData, setUserData] = useState();
  const idInputRef = useRef();

  const searchUserById = (event) =>{
    event.preventDefault();
  
    const enteredId = idInputRef.current.value;

    let url = 'https://reactexc3-default-rtdb.firebaseio.com/';

    fetch (url + enteredId + '.json',{method: 'GET'})
    .then ( async res => {
        if(res.ok) {
          return res.json();
        }else{
          const data = await res.json();
            throw new Error(data);
        }
      }).then( (data) => {
        setUserData(data);      
      }).catch (err => {
        console.log(err);
      });
  }

  return (
    <div>
        <h1 className={classes.title}>Search User By Id</h1>
        <form className={classes.form} onSubmit={searchUserById}>
            <div className={classes.control}>
                <label htmlFor='id'>Id</label>
                <input type='text' id='id' required ref = {idInputRef}/>
            </div>
            <div className={classes.action}>
                <button type='submit'>Search User</button>
            </div>
        </form>
        {
            userData && (
                <div className={classes.control}>
                    <label>Id</label>
                    <div>{userData.idNumber}</div>
                    <label>Name</label>
                    <div>{userData.name}</div>
                    <label>Address</label>
                    <div>{userData.address}</div>
                    <label>Phone Number</label>
                    <div>{userData.phoneNumber}</div>
                    <label>Email</label>
                    <div>{userData.email}</div>
                </div>
            )
        }
    </div>
  );
}

export default SearchForm;
