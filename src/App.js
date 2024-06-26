import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import app from './firebase_config'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/' Component={Home}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
