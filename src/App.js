import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import UserProfile from './pages/user/UserProfile';
import UserProfileUpdateForm from './pages/user/UserProfileUpdateForm';
import Footer from './components/footer/Footer';
import Breakfasts from './pages/breakfast/Breakfasts';

function App() {
  const [user, setUser] = useState({});
    const navigate = useNavigate();

    //console.log(user);

    useEffect(() => {
        try{
            const decodedUserInfo = jwtDecode(localStorage.getItem('token'));
            setUser({...decodedUserInfo});
            
        }catch(ex){
            console.log(ex);
            setUser(null)
            navigate("/login")
        }

    },[]);

  return (
    <div className="app">
        <Navbar user={user} />
        <Routes>
          <Route path='user/:id/profile' element={<UserProfile />}/>
          <Route path='user/:id/profile/update' element={<UserProfileUpdateForm />}/>
          {/* <Route path='/' element={<Breakfasts/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<p>Not Fond</p>}/>
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
