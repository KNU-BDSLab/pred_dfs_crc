import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, message, Typography, Spin, Alert } from 'antd'
import { EditOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../css/body.css"
import yonsei from "../image/Yonsei.png"
import ulsan from "../image/Ulsan.png"

const { TabPane } = Tabs;

const onChange = (key) => {
  };

function Body() {
    const link = document.location.href;

    const [result, setResult] = useState(0);
    const [first, setFirst] = useState(-10000);
    const [sec, setSec] = useState(-10000);
    const [thir, setThir] = useState(-10000);
    const [four, setFour] = useState(-10000);
    const [five, setFive] = useState(-10000);
    const [six, setSix] = useState(-10000);

    const [dfs, setDFS] = useState(-100);

    const [users, setUsers] = useState(null);
    const [users2, setUsers2] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loading2, setLoading2] = useState(false);
    const [error2, setError2] = useState(null);


    // First Number UseState
    const onChangeFir = e => {
        setFirst(parseFloat(e.target.value))
    };

    // Second Number UseState
    const onChangeSec = e => {
        setSec(parseFloat(e.target.value))
    };

    // Third Number UseState
    const onChangeThir = e => {
        setThir(parseFloat(e.target.value))
    };

    // Fourth Number UseState
    const onChangeFour = e => {
        setFour(parseFloat(e.target.value))
    };

    // Fifth Number UseState
    const onChangeFive = e => {
        setFive(parseFloat(e.target.value))
    };

    // Six Number UseState
    const onChangeSix = e => {
        setSix(parseFloat(e.target.value))
    };

    // DFS UseState
    const onChangeDFS = e => {
        setDFS(parseFloat(e.target.value))
    };

    //GET
    const fetchUsers = async () => {
        try {
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios.get(
            'http://ogyworld.pythonanywhere.com/api/',
            );
        setUsers(response.data);
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div><Spin tip="Loading..." size="large" style={{marginTop: "300px", marginBottom: "700px", marginLeft: "45%"}}/></div>; 
    if (error) return <div>Error Occurred</div>;

    if (!users) return null;

    function calcul() {

    }


    // POST
    const postUsers = async () => {

        try {
        setError(null);
        setUsers(null);
        setLoading(true);
        message.loading('Predicting');

        axios.post('http://ogyworld.pythonanywhere.com/api/',{
            title: "title",
            content: "content",

            NLR: first / sec,
            NAR: first / six,
            PLR: thir / sec,

            PAR: thir / six,
            LMR: sec / four,
            MAR: four / six,

            LCR: sec / five,
            CAR: five / six,
            NPM: first * thir,
            NMM: first * four,

            NCM: first * five,
            PMM: thir * four,
            PCM: thir * five,

            MCM: four * five,
            LAM: sec * six,
        }).then(function(response){
            window.location.href = "http://ogyworld.pythonanywhere.com/api/result/";
            setResult(users[users.length-1].result);
        });
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    return(
        <div style={{fontFamily: "arial"}}>

            <div className='body2'>
            
            <br/>
            <Alert
                message={<>
                <p>If you have serum neutrophil, platelet, monocyte, lymphocyte, CRP, and albumin, please type these six values in the below form. Then, we can estimate the DFS-score-4 and return it to you.</p>
    
                <p>If you have serum neutrophil, platelet, monocyte, lymphocyte, and CRP, please type these five values in the below form. Then, we can estimate the DFS-score-3 and return it to you.</p>
    
                <p>Briefly, serum inflammation-related markers such as monocyte, lymphocyte, neutrophil, albumin, platelet, and C-reactive protein (CRP) were used to make a compositions.</p>
    
                <p>Model 4 is based on the 15 compositions derived from six inflammatory markers and Model 3 is based on the 10 compositions derived from five inflammatory markers.</p>
    
                <p>The detailed information about how to define the compositions from the inflammatory markers has been described in the Material and Methods section of the manuscript(article), and Supplementary Table 1.</p>
                </>}
                type="warning"
                closable
                showIcon
                style={{width: "800px", marginLeft: "-150px", marginTop: "0px"}}
                />

            <br/><br/>
                <Link to="/"><b style={{fontSize: "18px"}}>Model 4 (DFS-score-4)</b></Link>
                {/** 
                    <Link to="/sa1"><b style={{fontSize: "15px", color: "black", marginLeft: "20px"}}> Survival analysis - 1</b></Link>}
                {<Link to="/sa2"><b style={{fontSize: "15px", color: "black", marginLeft: "20px"}}> Survival analysis - 2</b></Link>*/}
                <Link to="/model3"><b style={{fontSize: "18px", color: "#6D6D6D", marginLeft: "30px"}}>Model 3 (DFS-score-3)</b></Link>

                <Tabs defaultActiveKey="1" onChange={onChange} style={{ marginLeft: "0px", width: "600px"}}>
                    <TabPane tab="Prediction of DFS - Score" key="1">
                <b style={{fontSize: "20px", marginTop: "0px", position:"absolute", color: "#38B1EA"}}>
                Model 4 : Prediction of DFS - Score
                </b>
                <br/>
                <div style = {{backgroundColor: '#E6F7FF', width: '600px', height: '2px', marginTop: "20px", marginLeft: "0px"}}></div>

                <p style={{fontSize: "17px", marginTop: "10px", position:"absolute", color: "#D4910E"}}>
                <EditOutlined/> Please enter the value in the blank
                </p>
                <br/>
                <div style={{paddingLeft: "40px", paddingTop: "50px"}}>

                <b style={{fontSize: "15px", paddingRight: "50px"}}>Neutrophil (µl)</b>
                <Input placeholder="ex) 3520"  style={{width: "200px", height: "50px"}} onChange={onChangeFir}/>
                <br/><br/>

                <b style={{fontSize: "15px", paddingRight: "40px"}}>Lymphocyte (µl)</b>
                <Input placeholder="ex) 1690"  style={{width: "200px", height: "50px"}} onChange={onChangeSec}/>
                <br/><br/>

                <b style={{fontSize: "15px", paddingRight: "72px"}}>Platelet (µl)</b>
                <Input placeholder="ex) 212000"  style={{width: "200px", height: "50px"}} onChange={onChangeThir}/>
                <br/><br/>

                <b style={{fontSize: "15px", paddingRight: "57px"}}>Monocyte (µl)</b>
                <Input placeholder="ex) 240"  style={{width: "200px", height: "50px"}} onChange={onChangeFour}/>
                <br/><br/>

                <b style={{fontSize: "15px", paddingRight: "60px"}}>CRP (mg/dL)</b>
                <Input placeholder="ex) 0.04"  style={{width: "200px", height: "50px"}} onChange={onChangeFive}/>
                <br/><br/>

                <b style={{fontSize: "15px", paddingRight: "50px"}}>Albumin (g/dL)</b>
                <Input placeholder="ex) 5"  style={{width: "200px", height: "50px"}} onChange={onChangeSix}/>
                <br/><br/>

                <br/>
                </div>
                {
                    (first != -10000 && sec != -10000 && thir != -10000 && four != -10000 && five != -10000 && six != -10000) &&
                    (
                        <Button type="primary" style={{width: "200px", marginLeft: "170px"}} onClick={ () => {postUsers();} }>submit</Button>
                    )
                }
                 {
                    (first == -10000 || sec == -10000 || thir == -10000 || four == -10000 || five == -10000 || six == -10000) &&
                    (
                        <Button type="primary" style={{width: "200px", marginLeft: "170px"} } disabled>submit</Button>
                    )
                }
                <br/><br/>
                {
                    (users.length != 0) &&
                    (link != "https://knu-bdslab.github.io/pred_dfs_crc/#/") &&
                    (link != "https://knu-bdslab.github.io/pred_dfs_crc/") &&
                    (<Typography style= {{width: "530px", fontSize: "15px"}}>
                        <pre><b>Predicted DFS-Score: </b>{users[users.length-1].result}</pre>
                    </Typography>)
                }

                {/*
                    <>
                    <br/>
                    <b style = {{fontSize: "20px"}}>Predict Result</b>
                    <p style = {{fontSize: "20px"}}>{users[users.length-1].result}</p>
                </>
                */
                }
                </TabPane>
                    <TabPane tab="Survival Analysis" key="2">
                    <b style={{fontSize: "20px", marginTop: "0px", position:"absolute", color: "#38B1EA"}}>
                        Model 4 : Survival Analysis
                    </b>
                    <br/>
                    <div style = {{backgroundColor: '#E6F7FF', width: '600px', height: '2px', marginTop: "20px", marginLeft: "0px"}}></div>
                    <br/>
                    {
                    (users.length != 0) &&
                    (link != "https://knu-bdslab.github.io/pred_dfs_crc/#/") &&
                    (link != "https://knu-bdslab.github.io/pred_dfs_crc/") &&
                    (users[users.length-1].result >= 0.21729) &&
                    (<>
                        <Alert message={<>
                        The predicted DFS-score-4 is close to the {<b>high group</b>} which is defined by our study based on the patients data from Gangnam Severance Hospital.
                        </>} type="success" />
                        <br/>
                        <Alert message={<>
                        The predicted DFS-score-4 is close to the {<b>high group</b>} which is defined by our study based on the patients data from Ulsan University Hospital.
                        </>} type="success" />
                        </>)
                }

                {
                    (users.length != 0) &&
                    (link != "https://knu-bdslab.github.io/pred_dfs_crc/#/") &&
                    (link != "https://knu-bdslab.github.io/pred_dfs_crc/") &&
                    (users[users.length-1].result < 0.21729) &&
                    (<>
                    <Alert message={<>
                    The predicted DFS-score-4 is close to the {<b>low group</b>} which is defined by our study based on the patients data from Gangnam Severance Hospital.
                    </>} type="success" />
                    <br/>
                    <Alert message={<>
                    The predicted DFS-score-4 is close to the {<b>low group</b>} which is defined by our study based on the patients data from Ulsan University Hospital.
                    </>} type="success" />
                    </>)
                }

                    {/** 
                    <div style = {{backgroundColor: '#DADADA', width: '700px', height: '2px', marginTop: "0px", marginLeft: "0px"}}></div>

                        <br/><br/>
                        <img style={{height: "500px"}} src={yonsei}/>
                        <br/><br/>
                        <div style = {{backgroundColor: '#DADADA', width: '700px', height: '2px', marginTop: "0px", marginLeft: "0px"}}></div>
                        <br/><br/>
                        <img style={{height: "500px"}} src={ulsan}/>
            */}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </TabPane>
                </Tabs>
            </div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            </div>
            <br/><br/><br/><br/><br/>

        </div>
    );
}

export default Body;