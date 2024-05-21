import React from 'react';
import logo from '../../assets/vl-logo.webp';
import ThemeToggle from './themes/ThemeToggle';

export const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <img src={logo} alt='VoteLedger Logo' className='logo' />
        
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/vote">Vote</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};