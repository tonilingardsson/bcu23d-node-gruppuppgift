import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/layout/themes/ThemeContext';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);