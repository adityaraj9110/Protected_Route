import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Notifications from './components/notifications/Notifications';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import DashBoard from './components/dashBoard/DashBoard';
import Login from './components/Login/Login';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  // let login = true;
  const {login} = useSelector(state=>state.custom)
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Route Protected */}
      <Route element={<ProtectedRoute isAuth = {login}/>}>
        <Route path='/notification' element={<Notifications/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
      
      {/* Admin Protected */}
      <Route path='/admin/dashboard' element={
        <ProtectedRoute isAuth={login} adminRoute={true} isAdmin={true}>
          <DashBoard/>
        </ProtectedRoute>
      }/>
      <Route path='/auth' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
