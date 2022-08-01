import React, { useState } from 'react';
import { Alert } from 'antd';
import "../css/body.css"

function Header() {
        
  return (
    <div style={{fontFamily: "arial"}}>

    <div style={{backgroundColor: 'white', width: '100%', height: '250px'}}>
    <div className='body'>
    <p style = {{position:"absolute", color: "#49BBF0", fontSize: "30px", marginTop: "80px", marginLeft: "0px"}}>Prediction of Oncological Outcomes of Colorectal Cancer After Surgery</p>
    <br/>
    <p style = {{position:"absolute", color: "#49BBF0", fontSize: "30px", marginTop: "110px", marginLeft: "0px"}}>using Systemic Inflammatory Markers based on machine learning</p>
    </div>
    </div>
    <div style = {{backgroundColor: '#E6F7FF', width: '100%', height: '5px', marginLeft: "0px"}}></div>
    </div>
  );
}

export default Header;
