import React from 'react';

const CGU_Login=() => {
  return (
      <form>
            <div className = 'con'>
                <h1>CGU Login</h1>
                <div>
                    <label>User Name </label>
                    <input type = 'text' id='name'></input>
                </div>
                <div>
                    <label>Password </label>
                    <input type = "password" id="password"></input>
                </div>
                <button id = "login">登入</button>
            </div>
        </form>);
}

export default CGU_Login;