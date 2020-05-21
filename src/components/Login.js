import React, { Fragment } from 'react';
import "../assets/style/Login.scss";

class Login extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <div className="wall">
                        <div className="layout-form">
                            <form action="/">
                                <input type="text" name="name" placeholder="Email" required="" />
                                <input type="password" placeholder="password" />
                                <input type="submit" value="Login" class="btn float-right login_btn" />
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login;