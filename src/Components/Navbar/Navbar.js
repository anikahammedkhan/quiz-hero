import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Main-logo.png';


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-full shadow-lg rounded-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='h-full' src={Logo} alt="" /></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-semibold">
          <li><Link to="home">Home</Link></li>
          <li><Link to="topics">Topics</Link></li>
          <li><Link to="statistics">Statistics</Link></li>
          <li><Link to="blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;