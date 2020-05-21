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
                            <button>Sign up</button>
                        </div>
                        <div className="layout-form__logo">

                        </div>
                        <form action="/">
                            <input type="email" name="name" placeholder="Email" required="" />
                            <input type="password" placeholder="password" />
                            <input type="submit" value="Login" class="btn float-right login_btn" />
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login;