import React from 'react';
import './components/CSS/Header.css';
import Logo from './img/logo.svg';

function Header() {
  return (
    <div>
        <img src={Logo} class="logoImg" alt="no logo"/>
    </div>
  )
}

export default Header