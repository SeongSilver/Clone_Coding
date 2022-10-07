import React from 'react';
import {Link} from 'react-router-dom'
import './components/CSS/Header.css';
import Logo from './img/logo.svg';

function Header() {
  return (
    <div className="header">
        <Link to={"/"}><img src={Logo} className="header_img" alt="no logo"/></Link>
    </div>
  )
}

export default Header