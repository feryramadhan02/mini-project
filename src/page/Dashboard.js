import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import "../assets/style/Dashboard.scss";
import axios from "axios";

const baseUrl = "https://be-mini-project.herokuapp.com/api/user/register"

class Login extends React.Component {
    state = {
        todos: [],
        isLoading: false,
        title: "" //bentuk teks bukn array
    }

    addTask = async () => {
        this.setState({ isLoading: true })
        const res = await axios.post(`${baseUrl}`, {
            title: this.state.title,
            completed: false
        })
        this.setState({
            todos: [res.data, ...this.state.todos],
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
                            <p>{this.state.isLoading && "loding..."}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login;