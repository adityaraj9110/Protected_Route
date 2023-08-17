import React from 'react'
import { Link, useLocation } from "react-router-dom"
const Navbar = () => {
   const location =useLocation();

  return (
    <div className='navbar'>
      <div className="logo">Redux</div>
      <div className="nav_items">
        <Link to="/"  className={location.pathname === '/' ? 'active_link nav_link' : 'nav_link'}>Home</Link>
        <Link to="/notification" className={location.pathname === '/notification' ? 'active_link nav_link' : 'nav_link'}>Notification</Link>
        <Link to="/profile"  className={location.pathname === '/profile' ? 'active_link nav_link' : 'nav_link'}>Profile</Link>
        <Link to="/admin/dashboard"  className={location.pathname === '/admin/dashboard' ? 'active_link nav_link' : 'nav_link'}>DashBoard</Link>

        <Link to="/posts" className={location.pathname === '/posts' ? 'active_link nav_link' : 'nav_link'}>Posts</Link>
        <Link to="/auth" className={location.pathname === '/auth' ? 'active_link nav_link' : 'nav_link'}>Login</Link>
      </div>
      
    </div>
  )
}

export default Navbar
