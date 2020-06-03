import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import "../assets/style/Dashboard.scss";
import ImageUpload from '../components/ImageUpload';
import axios from "axios";
import Swal from 'sweetalert2';

const baseUrl = "https://be-mini-project.herokuapp.com/api/task/"

class Login extends React.Component {
    state = {
        task: [],
        title: "",
        description: "",
        due_date: ""
    }

    getTask = async () => {
        let token = localStorage.getItem('token')
        try {
            const res = await axios.get(`${baseUrl}`, {
                headers: {
                    authorization: token
                }
            })
            this.setState({ task: res.data.data.Search_Result })
            console.log(res.data.data.Search_Result)
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount() {
        this.getTask()
    }
    change = e => {
        this.setState({ title: e.target.value, description: e.target.value, due_date: e.target.value })
    }


    addTask = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')
        console.log('fungsi run...')

        this.setState({ loading: true })
        axios({
            method: "POST",
            url: "https://be-mini-project.herokuapp.com/api/task/",
            headers: {
                authorization: token
            },
            data: {
                title: this.state.title,
                description: this.state.description,
                due_date: this.state.due_date

            }
        })
            .then(res => {
                this.setState({ loading: false })
                if (res.data.status) {
                    Swal.fire({
                        icon: 'success',
                        text: 'task berhasil ditambahkan!'
                    })
                }
            })
            .catch(err => {
                this.setState({ loading: false })

                Swal.fire({
                    icon: 'error',
                    text: err.response.status
                })
            })
    }

    deleteTask = async (id) => {
        let token = localStorage.getItem('token')
        try {
            const res = await axios.delete(`${baseUrl}/${id}`, {
                headers: {
                    authorization: token
                }
            })
            if (res.data.status === "success") {
                this.setState({
                    task: this.state.task.filter(item => item.id !== id)
                })
            }
            console.log(res.data.status)
        } catch (error) {
            console.log(error)
        }
    }



    handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        this.props.history.replace("/")
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout">
                        <div className="layout__text-wrapper">
                            <img src={require("../assets/images/photo.jpg")} alt="" />
                            <ImageUpload />
                            <ul>
                                <li><Link to="/my_day">My day</Link></li>
                                <li><Link to="/important">important</Link></li>
                                <li><Link to="/completed">Completed</Link></li>
                            </ul>

                        </div>
                        <div className="layout__task">
                            <div className="layout__task__todos">
                                <ul>
                                    <h4>Todos</h4>
                                    <button onClick={this.handleLogout}>Sign Out</button>
                                </ul>
                            </div>
                            <input type="text" name="title" value={this.state.title} onChange={this.change} placeholder="add task..." />
                            <input type="text" name="description" value={this.state.description} onChange={this.change} placeholder="add task..." />
                            <input type="text" name="due_date" value={this.state.due_date} onChange={this.change} placeholder="add task..." />
                            <button onClick={this.addTask}>Add</button>
                            <ul>
                                {this.state.task.map(item =>
                                    <li key={item.id}>
                                        <div> {item.title} </div>
                                        <div>{item.description} </div>
                                        <button onClick={this.deleteTask}>delete</button>

                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login;