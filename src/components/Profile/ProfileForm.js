import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../Store/Auth-Context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory()

  const Authctx = useContext(AuthContext)

  const inputRef = useRef()
  

  const submitHandler =(event)=>{
    const NewEnteredPossward = inputRef.current.value
    event.preventDefault()

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDsLdCMlyVs7jwRRi_FBZq75HeClwfk7pQ',{
      method:'POST',
      body:JSON.stringify({
        idToken:Authctx.token,
        password:NewEnteredPossward,
        returnSecureToken:false,


      })
      ,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      
      //Assumption:always succeed
      alert('New possaward updated') 
      history.replace('/')
      
    })
   
  }

  

  return (
    <form className={classes.form} onClick={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={inputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
