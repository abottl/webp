import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import './main.css'
import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import ig from './pages/instagram_logo.jpeg';
import firebase from './utils/firebase.js';

require('firebase/auth')

function Main() {
    const [user, setUser] = React.useState(null);
    React.useEffect(() =>{
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
    }, []);
    return (
        <div class='a'>
            <Menu.Item className='fi' as={Link} to='/'>
                <img src={ig}/>
            </Menu.Item><br />
            <Menu.Menu position='right'>
                <Menu.Item className='si' as={Link} to='/signin'>註冊/登入</Menu.Item>
            </Menu.Menu>
        </div>
    );
}

export default Main;
