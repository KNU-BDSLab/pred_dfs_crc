import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function Header() {
        
  return (
    <div>
    <div style={{backgroundColor: '#374061', width: '100%', height: '330px'}}>
    <b style = {{position:"absolute", color: "white", fontSize: "35px", marginTop: "90px", marginLeft: "100px"}}>Prediction of Oncological Outcomes of Colorectal Cancer After Surgery</b>
    <br/>
    <b style = {{position:"absolute", color: "white", fontSize: "35px", marginTop: "130px", marginLeft: "100px"}}>using Systemic Inflammatory Markers based on machine learning</b>
    </div>
    <div style = {{backgroundColor: '#F1B68C', width: '100%', height: '15px', marginLeft: "0px"}}></div>
    </div>
  );
}

export default Header;
