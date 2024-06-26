import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
function Home() {
    const [logged,setLogged]=useState(localStorage.getItem('logged_in'));
    const navigate=useNavigate();
    function logout(){
        localStorage.setItem('logged_in','null');
        setLogged(false);
        navigate('/login');
        console.log("hi")
    }
  return (
    <>
    {(logged!=='null')?<>{logged} logged in hai
    <button onClick={logout}>Logout</button>
    </>:<>logged in nahi hai<br/>
    <Link to="/login">Login</Link><br/>
    <Link to="/signup">Signup</Link>
    </>}
    </>
  )
}

export default Home