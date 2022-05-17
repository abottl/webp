import './hw7_CGU_login.css';

const CGU_Login=() => {
    var output=[];
    output.push(
            <div className = 'con'>
                <h1>CGU Login</h1>
                <div>
                    <label style= "name">User Name </label><input type = 'text' style = 'in' id='name'></input>
                </div>
                <div>
                    <label style = 'password'>Password </label><input type = "password" style = "in" id="password"></input>
                </div>
                <button style = "login">登入</button>
            </div>
        )
    return output;
}

export default CGU_Login;
