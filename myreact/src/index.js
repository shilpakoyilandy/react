import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

import { Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
      </Routes>
    {/* <Home /> */}
    <Profile/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();