import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/SignUp.scss";
import "../assets/style/Responsive.scss";
import axios from "axios";

const baseUrl = "https://be-mini-project.herokuapp.com/api/user/register"

class SignUp extends React.Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')
        console.log('sukess mi')

        this.setState({ loading: true })
        axios({
            method: "POST",
            url: "https://be-mini-project.herokuapp.com/api/user/register",
            headers: {
                Authorization: token
            },
            data: {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            }
        })
            .then(res => {
                this.setState({ loading: false })

                if (res.data.status) {
                    Swal.fire({
                        icon: 'success',
                        text: 'user berhasil ditambahkan!'
                    })
                        .then(() => {
                            this.props.history.replace("/")
                        })
                }
            })
            .catch(err => {
                this.setState({ loading: false })

                Swal.fire({
                    icon: 'error',
                    text: err.response.data.status
                })
            })
    }

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
                        </div>
                        <div className="layout-forms__content">
                            <form style={{ marginTop: "40px" }}>
                                <p className="small-text">or use your email for registration</p>
                                <input type="text" id="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Username" required="" />
                                <input type="email" id="email" value={this.state.email} onChange={this.handleOnChange} placeholder="Email" required="" />
                                <input type="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Password" />
                                <input type="submit" value="Sign Up" onClick={this.addTodo} />
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SignUp;