import React from 'react';
import ReactDOM from 'react-dom';

import Home from './screens/Home';
import Sidebar from './components/Sidebar';

import './styles.css';


ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
      
      <Sidebar />
      <Home />

    </div>,
  </React.StrictMode>,
  document.getElementById('root')
);
