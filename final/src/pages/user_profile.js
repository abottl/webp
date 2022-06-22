import '../pages/user.css';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PeopleIcon from '@material-ui/icons/EmojiPeople';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@mui/material/Box';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import preview from './ph.jpg';

const styles={
    box:{
        position:"absolute",
        left:"10%",
        top:"10%"
    },
    Hstyle:{
        padding:"0px",
        margin:"0px"
    },
    content:{
        position:"absolute",
        left:"35%",
        top:"23%"
    },
    infor:{
        position:"absolute",
        left:"5%"
    },
    icon:{
        marginTop:"10px",
        marginRight:"5px",
        marginBottom:"-3px",
        fontSize:"30px"
    },
    
}
function Userprofile(){
    const imageStyle={ width: '150px', height: '150px' }
    const navigate=useNavigate();
    const gohome=() =>{return navigate('/home');}
    const post=() =>{return navigate('/newpost');}
    return(
        <div>
            <Box sx={{width:"700px"}} style={styles.box}>
                <button className='gohome' onClick={()=>gohome()}
                    >  
                    Home
                </button>
                <br />
                <img src={preview} style={imageStyle} alt='Background'/>
                <div style={styles.content}>
                    <h1 style={styles.Hstyle}>yp</h1>
                    <h1> </h1>
                </div>
                <div style={styles.infor}>
                    <h4> </h4>
                    <h3 style={styles.Hstyle}><AssignmentIndIcon style={styles.icon}/>id: 165495452</h3>
                    <h3 style={styles.Hstyle}><LocationOnIcon style={styles.icon}/>location: tainan</h3>
                    <h3 style={styles.Hstyle}><PeopleIcon style={styles.icon}/>followers: 5</h3>
                    <h3 style={styles.Hstyle}><PeopleIcon style={styles.icon}/>3 following</h3>
                    <h3 style={styles.Hstyle}><EmailOutlinedIcon style={styles.icon}/>iping910103@gmail.com</h3>
                    <br />
                    <button className='post' onClick={()=>post()}
                    >  
                    Newpost
                </button> 
                </div>
            </Box>
        </div>
    )
}

export default Userprofile