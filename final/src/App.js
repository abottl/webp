import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './Main.js'
import Login from './pages/login.js';
import Post from './pages/NewPost.js';
import Home from './pages/post'
import Userprofile from './pages/user_profile';

function App() {
  return (
    <BrowserRouter>
    <Main />
      <Routes>
        <Route path="/signin" exact  element={ <Login /> }></Route>
        <Route path="/newpost" exact  element={ <Post /> }></Route>
        <Route path="/Userprofile" exact  element={ <Userprofile /> }></Route>
        <Route path="/home" exact  element={ <Home /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;