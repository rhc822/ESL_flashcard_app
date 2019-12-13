import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

/* Initial page the browser sees, which "contains" the whole App */

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));