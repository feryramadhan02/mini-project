import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/SignUp.scss";
import "../assets/style/Responsive.scss";

class SignUp extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-forms">
                        <div className="layout-forms__text-wrapper">
                            <h3>Welcome Back!</h3>
                            <p style={{ margin: " 0 6px" }}>To keep connected with us please</p>
                            <p style={{ margin: " 10px 16px" }}>login with your personal info</p>
                            <button><Link to="/">Sign in</Link></button>
                            <button><Link to="/upload">c</Link></button>
                        </div>
                        <div className="layout-forms__content">
                            {/* <div className="layout-forms__content__photo">
                                <img 
                            </div> */}
                            <p className="small-text">or use your email account</p>
                            <form action="/">
                                <input type="email" name="name" placeholder="Email" required="" />
                                <input type="password" placeholder="Password" />
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SignUp;