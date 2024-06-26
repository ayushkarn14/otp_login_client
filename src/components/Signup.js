import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

import { useNavigate,Link } from 'react-router-dom';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
const url='http://localhost:3000';
function Signup() {
  const navigate=useNavigate();
  function onCaptchaVerify(){
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        onSignInSubmit();
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
    });
    
  }
  useEffect(() => {
    
  }, []);
  
  function AddUser(){
    axios
      .post(url+'/user', {
        username:username,
        password:password,
        phone:phone
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('logged_in',username);
        navigate("/");
      });

  }
  function checkIfPhoneExists(){
    axios.get(url+'/phone/'+phone).then((res) => {
      if(res!=null){
        alert ("Phone number exists");
      }
      else{
        console.log("new number");
      }
    }).catch(()=>{
      //handle new number here
      onSignInSubmit();
      console.log("new number");
    });

  }
  function onSignInSubmit(){

    onCaptchaVerify();
    const phoneNumber = "+91"+phone;
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("OTP sent");
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

  }
  function verifyCode(){
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      console.log(phone);
      setVerified(true);
      alert("Verification done");
      // ...
    }).catch((error) => {
      alert("Invalid OTP");
      // User couldn't sign in (bad verification code?)
      // ...
    });    
  }


  const [username,setUsername]=useState('');
  const [code,setCode]=useState('');
  const [verified,setVerified]=useState(false);
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  return (
    <>
    <div id='recaptcha-container'></div>
      {(!verified)?<>
      Phone:
      <input type='text'
       value={phone}
       onChange={(e) => setPhone(e.target.value)}></input>
       <br/>
      <button onClick={checkIfPhoneExists}>Get OTP</button><br/><br/>
      OTP:
      <input type='text'
       value={code}
       onChange={(e) => setCode(e.target.value)}></input>
       <button onClick={verifyCode}>Verify OTP</button><br/><br/>
       <Link to="/login">Already signed up? Log in    </Link>
      </>
      :
      <>
      username:
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}></input><br/>
      password:
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button onClick={AddUser}>Signup</button>
      </>
      }
    </>
  )
}

export default Signup