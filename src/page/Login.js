import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import "../assets/style/Responsive.scss";

class Login extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-form">
                        <div className="layout-form__text-wrapper">
                            <h3>Hello, Friend!</h3>
                            <p style={{ margin: " 0 10px" }}>Enter your personal details and</p>
                            <p style={{ margin: " 10px 25px" }}>start your journey with us</p>
                            <button><Link to="/sign_up">Sign up</Link></button>
                        </div>
                        <div className="layout-form__content">
                            <h2>Sign in to Task Manager</h2>
                            <ul>
                                <li><Link to="/"><img src={require("../assets/images/fb-1.png")} alt="" /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/g+2.png")} alt="" /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/linkedin-3.png")} alt="" /></Link></li>
                            </ul>
                            <p className="small-text">or use your email account</p>
                            <form action="/dashboard">
                                <input type="email" name="name" placeholder="Email" required="" />
                                <input type="password" placeholder="Password" />
                                <input type="submit" value="Sign in" />
                            </form>
                            <div className="layout-form__content__support">
                                <ul>
                                    <li><a href="http://gmail.com"><p>Forgot your password?</p></a></li>
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