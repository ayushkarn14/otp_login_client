import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';


const url='http://localhost:3000';

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  useEffect(() => {
    
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter username and password');
    }
    else{
      axios.get(url+'/user/'+username).then((res)=>{
        console.log(password);
        console.log(res.data.password);
        if(res.data.password==password){
          localStorage.setItem('logged_in',username);
          navigate('/');
        }
        else{
          alert('incorrect password')
        }

      }).catch(()=>{
        alert('User does not exist');
      })
      //handlelogin
      
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
