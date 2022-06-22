import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import '../pages/Login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form} from 'semantic-ui-react';
import firebase from '../utils/firebase.js';
require('firebase/auth')


function Login(){
    const [activeItem, setAtiveItem] = React.useState('register');
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');
    const navigate = useNavigate();

    function onSubmit() {
        if (activeItem === 'register'){
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {navigate('/')})
        }
        else if (activeItem === 'signin'){
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {navigate('/Userprofile')})
        }
    };
    return(
        <div class ="a">
            <button 
            active ={activeItem === 'register'} 
            onClick={()=>setAtiveItem('register')}
            className='login-register'
            >
                註冊
            </button>
            <button 
            active ={activeItem === 'signin'} 
            onClick={()=>setAtiveItem('signin')}
            className='login-signin'
            >
                登入
            </button>
            <br /><br /><br />
            <Form onSubmit={onSubmit()}>
                <TextField
                required
                label = "Email Address"
                placeholder='example@gmail.com'
                value={email}
                onChange={(e) => setemail(e.target.value)} /> <br />
                <br />
                <TextField
                required
                label = "Password"
                placeholder='輸入密碼'
                value={password}
                onChange={(e) => setpassword(e.target.value)} /> <br />
                < Button
                type = "submit"
                variant = "contained"
                status="0"
                    sx =
                        {{mt: 3, mb: 2}} 
                // onClick={()=>confirm()}
                >
                    {activeItem === 'register' && '註冊'}
                    {activeItem === 'signin' && '登入'}
                </Button>
            </Form>
        </div>
    )
}
    
export default Login;