import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Main-logo.png';


const Navbar = () => {
  return (
    <div className='sticky top-0 z-10'>
      <div className="navbar bg-base-100 shadow-lg rounded-md justify-between">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='h-full' src={Logo} alt="" /></Link>
        </div>
        <div className="hidden md:hidden lg:block flex-none">
          <div className="navbar-item">
            <ul className="menu menu-horizontal p-0 font-semibold">
              <li><Link to="home">Home</Link></li>
              <li><Link to="topics">Topics</Link></li>
              <li><Link to="statistics">Statistics</Link></li>
              <li><Link to="blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex-none block md:block lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box">
              <li><Link to="home">Home</Link></li>
              <li><Link to="topics">Topics</Link></li>
              <li><Link to="statistics">Statistics</Link></li>
              <li><Link to="blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;