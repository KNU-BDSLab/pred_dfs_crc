import React, {Alert } from 'react'
import "../css/body.css"

function Bottom(){
    return(
        <>
        <div className='body'>
        <p style={{fontSize: "15px", marginLeft: "0%", fontFamily: "arial"}}>This system was developed as a part of academic and clinical research, and since it has not been approved yet, it is only available to be used as a reference for your study.</p>
        </div>
            <div style = {{backgroundColor: '#C4C4C4', width: '100%', height: '300px', marginTop: "10px", position:"absolute", paddingLeft: "0px", zIndex: "-1"}}></div>
            <div>
                <p style={{marginLeft: "350px", marginTop: "110px", position:"absolute"}}></p>
            </div>
            
        </>
    );
}

export default Bottom;