import React from 'react';
import './index.css';
import Header from './scripts/Header';
import Body from './scripts/Body';
import Bottom from './scripts/Bottom';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App.test';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from "./scripts/Home"
import Home2 from "./scripts/Home2"
import SA1 from "./scripts/SA1"
import SA2 from "./scripts/SA2"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
    	<Routes>
          <Route path="/model3" exact={true} element={<Home />} />
          <Route path="/" exact={true} element={<Home2 />} />
          {/** 
          <Route path="/sa1" exact={true} element={<SA1 />} />
          <Route path="/sa2" exact={true} element={<SA2 />} />
            */}

          <Route path="/model3/result" exact={true} element={<Home />} />
          <Route path="/result" exact={true} element={<Home2 />} />
          {/**
          <Route path="/sa1/result" exact={true} element={<SA1 />} />
          <Route path="/sa2/result" exact={true} element={<SA2 />} />
          */}
          
        </Routes>
	</HashRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
