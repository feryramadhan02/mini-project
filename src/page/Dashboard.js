import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import "../assets/style/Dashboard.scss";
import axios from "axios";

const baseUrl = "https://be-mini-project.herokuapp.com/api/user/register"

class Login extends React.Component {
    state = {
        title: ""
    }

    addTask = async () => {
        const res = await axios.post(`${baseUrl}`, {
            title: this.state.title,
        })
        this.setState({
            title: [res.data, ...this.state.title],
            title: ""
        })
    }

    change = e => {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout">
                        <div className="layout__text-wrapper">
                            <img src={require("../assets/images/photo.jpg")} alt="" />
                            <ul>
                                <li><Link to="/my_day">My day</Link></li>
                                <li><Link to="/important">important</Link></li>
                                <li><Link to="/completed">Completed</Link></li>
                            </ul>

                        </div>
                        <div className="layout__task">
                            <input type="text" value={this.state.title} onChange={this.change} placeholder="add task..." />
                            <button onClick={this.addTask}>Add</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login;