import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";

class Login extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-form">
                        <div className="layout-form__text-wrapper">
                            <h3>Hello, Friend!</h3>
                            <p style={{ margin: " 0 10px" }}>Enter your personal details and</p>
                            <p style={{ margin: " 10px 20px" }}>start your journey with us</p>
                            <button><Link to="/">Sign up</Link></button>
                        </div>
                        <div className="layout-form__content">
                            <h2>Sign in to Task Manager</h2>
                            <ul>
                                <li><Link to="/"><img src={require("../assets/images/Facebook_f_logo_(2019).svg")} /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/g+.svg")} /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/Linkedin.svg.png")} /></Link></li>
                            </ul>
                            <p className="small-text">or use your email account</p>
                            <form action="/">
                                <input type="email" name="name" placeholder="Email" required="" />
                                <input type="password" placeholder="Password" />
                                <input type="submit" value="Sign in" />
                            </form>
                            <div className="layout-form__content__support">
                                <ul>
                                    <li><Link to="/"><img src={require("../assets/images/playstore.png")} /></Link></li>
                                    <li><Link to="/"><img src={require("../assets/images/appstore.png")} /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login;