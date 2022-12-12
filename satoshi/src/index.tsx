import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';


// const history = createBrowserHistory();

ReactDOM.render(
         <BrowserRouter>
            <React.StrictMode>
             <App />
            </React.StrictMode>,
        </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
