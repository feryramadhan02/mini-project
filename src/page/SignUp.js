import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/SignUp.scss";
import "../assets/style/Responsive.scss";
import axios from "axios";

const baseUrl = "https://be-mini-project.herokuapp.com/api/user/register"

class SignUp extends React.Component {
    state = {
        todos: [],
        email: "",
        password: ""
    }

    addTodo = async () => {
        const res = await axios.post(`${baseUrl}`, {
            email: this.state.email,
            password: this.state.password
        })
        // update UI
        this.setState({
            todos: [res.data, ...this.state.todos],
            email: "",
            password: ""
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
                            <form action="/thanks">
                                <p className="small-text">or use your email for registration</p>
                                <input type="text" name="name" placeholder="Username" required="" />
                                <input type="email" name="email" placeholder="Email" required="" />
                                <input type="password" placeholder="Password" />
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