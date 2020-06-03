import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import "../assets/style/Responsive.scss";
import axios from 'axios';
import Swal from 'sweetalert2';
import verifyToken from '../helper/VerifyToken';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        let token = verifyToken()
        if (token) this.props.history.replace('/')
    }

    handleOnchange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginClick = (e) => {
        e.preventDefault()
        console.log('fungsi run')

        axios({
            method: "POST",
            url: "https://be-mini-project.herokuapp.com/api/user/login",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(res => {
                if (res.data.status) {
                    // jika responnya berupa status maka Simpan Token di local storage
                    localStorage.setItem('token', res.data.data.token)
                    //console.log(res.data.data atau .token atau .status) digunakan utk mencari letak token

                    this.props.history.push("/dashboard")
                } else {
                    // Handle Error yang masuk ke then
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    text: err.response.data.message
                })
            })

    }
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
                                <input type="email" id="email"
                                    value={this.state.email}
                                    onChange={this.handleOnchange}
                                    placeholder="Email" required="" />
                                <input type="password" id="password"
                                    value={this.state.password}
                                    onChange={this.handleOnchange}
                                    placeholder="Password" />
                                <input type="submit" onClick={this.handleLoginClick} value="Sign in" />
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