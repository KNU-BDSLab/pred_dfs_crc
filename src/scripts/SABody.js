import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, message, Spin } from 'antd'
import { EditOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../css/body.css"

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };

function SABody() {
    const link = document.location.href;

    const [dfs, setDFS] = useState(-100);

    const [users2, setUsers2] = useState(null);
    const [loading2, setLoading2] = useState(false);
    const [error2, setError2] = useState(null);


    // DFS UseState
    const onChangeDFS = e => {
        setDFS(parseInt(e.target.value))
    };

    //GET API2
    const fetchUsers2 = async () => {
        try {
        setError2(null);
        setUsers2(null);
        setLoading2(true);

        const response2 = await axios.get(
            'http://ogyworld.pythonanywhere.com/api2/',
            //'http://127.0.0.1:8000/api2/',
            );
        setUsers2(response2.data);
        } catch (e) {
        setError2(e);
        }
        setLoading2(false);
    };

    useEffect(() => {
        fetchUsers2();
    }, []);

    if (loading2) return <div><Spin tip="Loading..." size="large" style={{marginTop: "300px", marginBottom: "700px", marginLeft: "45%"}}/></div>;
    if (error2) return <div>Error Occurred</div>;

    if (!users2) return null;

    // POST
    const postUsers2 = async () => {

        try {
        setError2(null);
        setUsers2(null);
        setLoading2(true);
        message.loading('Predicting');

        axios.post('http://ogyworld.pythonanywhere.com/api2/',{
        //axios.post('http://127.0.0.1:8000/api2/',{
            title: "title",
            content: "content",
            dfs: dfs,
            siteN: 15,
        }).then(function(response){
            window.location.href = "http://ogyworld.pythonanywhere.com/api2/result/";
            //window.location.href = "http://127.0.0.1:8000/api2/result/";
        });
        } catch (e) {
        setError2(e);
        }
        setLoading2(false);
    };

    return(
        <div>
            <div className='body2'>
            <br/><br/><br/>
                    
                <Link to="/"><b style={{fontSize: "15px", color: "black"}}>Prediction of DFS - Score</b></Link>
                <Link to="/sa1"><b style={{fontSize: "15px", marginLeft: "20px"}}> Survival analysis - 1</b></Link>
                <Link to="/sa2"><b style={{fontSize: "15px", color: "black", marginLeft: "20px"}}> Survival analysis - 2</b></Link>
                <br/>

                <b style={{fontSize: "30px", marginTop: "10px", position:"absolute", color: "#2E4189"}}>
                Survival analysis - 1
                </b>
                <br/>
                <div style = {{backgroundColor: '#F1B68C', width: '850px', height: '5px', marginTop: "40px", marginLeft: "0px"}}></div>
                <br/>
                <b style={{fontSize: "25px", marginTop: "0px", position:"absolute", color: "#493F38"}}>
                <EditOutlined/> Please enter the follow-up time (month)
                </b>
                <b style= {{fontSize: "20px"}}>Month: </b>
                <Input placeholder="ex) 36"  style={{width: "150px", height: "45px", marginTop: "60px", marginLeft: "20px"}} onChange={onChangeDFS}/>

                {
                    (dfs != -100) &&
                    (
                        <Button type="primary" style={{width: "200px", marginLeft: "50px"}} onClick={ () => {postUsers2();} }>predict survival</Button>
                    )
                }
                 {
                    (dfs == -100 ) &&
                    (
                        <Button type="primary" style={{width: "200px", marginLeft: "50px"}}  disabled>Please enter the value</Button>
                    )
                }
                <br/> <br/>  <br/> 
                {
                    (users2.length != 0) &&
                    (link != "https://ogyworld.github.io/15to6/#/sa1") &&
                    (<img style={{height: "400px"}} src={users2[users2.length-1].image}/>)
                }
                <br/><br/><br/><br/><br/><br/><br/>

            </div>
                
                
            <br/><br/><br/><br/><br/><br/>

            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            </div>
            <br/><br/><br/><br/><br/>

        </div>
    );
}

export default SABody;