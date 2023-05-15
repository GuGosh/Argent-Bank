import { useState, useEffect } from 'react';
import { login } from '../services/index';
import { useDispatch } from 'react-redux'
import { addToken } from '../features/userToken'
import { useNavigate } from "react-router-dom";


function Login() {
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userToken, setUserToken] = useState();

    const dispatch = useDispatch()
    const navigate = useNavigate();


    async function submitForm(e) {
        e.preventDefault();
        await login(userEmail, userPassword).then((response) => {
            return response.data.body.token;
        }).then((token) => {
            if (token) {
                dispatch(addToken(token))
                navigate("/account");
            }
        })
    }

    function handleChangeEmail(e) {
        setUserEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setUserPassword(e.target.value);
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={submitForm}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={userEmail} onChange={handleChangeEmail} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={userPassword} onChange={handleChangePassword} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}
export default Login;