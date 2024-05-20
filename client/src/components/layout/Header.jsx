import React, { useContext } from 'react';
import { ThemeContext } from '../layout/ThemeContext';
import logo from '../../assets/vl-logo.webp';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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

        <button onClick={toggleTheme}>
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};