import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className='nav'>
          <input type='checkbox' id='check' />
              <label for='check' className='checkbtn'><i class="fas fa-bars"></i></label>
              <label className='logo'>Redux Session</label>
              <ul className='nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/todo'>Todo</Link></li>
              </ul>
        </div>
    )
}

export default NavBar;



