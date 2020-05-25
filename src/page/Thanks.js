import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Thanks.scss";

class SignUp extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-formss">
                        <div className="layout-formss__text-wrapper">
                            <h3>Welcome Back!</h3>
                            <p style={{ margin: " 0 6px" }}>To keep connected with us please</p>
                            <p style={{ margin: " 10px 16px" }}>login with your personal info</p>
                            <button><Link to="/">Sign in</Link></button>
                        </div>
                        <div className="layout-formss__thanks">
                            <h2>Thankyou for registering</h2>
                            <h3>Please back to the sign in page!</h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SignUp;