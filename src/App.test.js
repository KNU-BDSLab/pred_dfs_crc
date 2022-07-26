import { render, screen } from '@testing-library/react';
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./scripts/Home"
import Home2 from "./scripts/Home2"
import SA1 from "./scripts/SA1"
import SA2 from "./scripts/SA2"


function App() {
    return(
      <>
        <Routes>
          <Route path="/15to6" exact={true} element={<Home/>} />
          <Route path="/model4" exact={true} element={<Home2 />} />

          {/** 
          <Route path="/sa1" exact={true} element={<SA1 />} />
          <Route path="/sa2" exact={true} element={<SA2 />} />
          */}

          <Route path="15to6/result" exact={true} element={<Home />} />
          <Route path="/model4/result" exact={true} element={<Home2 />} />
          {/** 
          <Route path="/sa1/result" exact={true} element={<SA1 />} />
          <Route path="/sa2/result" exact={true} element={<SA2 />} />
          */}
        </Routes>
      </>
    );
}
  
  export default App;