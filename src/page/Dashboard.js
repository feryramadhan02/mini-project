import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Dashboard.scss";
import axios from "axios";
import { Spinner } from "reactstrap";
import Swal from 'sweetalert2';

const baseUrl = "https://be-mini-project.herokuapp.com/api/task/"
const profileUrl = "https://be-mini-project.herokuapp.com/api/profile/"

class Login extends React.Component {
    state = {
        task: [], //sesuaikan doc Api, [] atau ""
        profile: "",
        title: "",
        description: "",
        due_date: "",
        loading: false
    }

    //asynchronus krn tdk d tau yang mana dluan muncul
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

    getProfile = async (id) => {
        let token = localStorage.getItem('token')
        try {
            const res1 = await axios.get(`${profileUrl}${id}`, {
                headers: {
                    authorization: token
                }
            })
            this.setState({ profile: res1.data.data })
            console.log(res1.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.getTask()
        this.getProfile()
    } // klo pke hooks, pke useStates atau use....

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            //sesuaikan dgn doc pke body atau data  
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
                    text: err.response.message
                })
            })
    }

    deleteTask = async (id) => {
        let token = localStorage.getItem('token')
        alert('Apakah anda yakin?')
        try {
            const res = await axios.delete(`${baseUrl}${id}`, {
                headers: {
                    authorization: token
                }
            })
            console.log('id : ', id)
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
        localStorage.removeItem("token")
        this.props.history.replace("/")
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout">
                        <div className="layout__text-wrapper">
                            <p><Link to="/editprofile">Edit Profile</Link></p>
                            <img src={require("../assets/images/default-user-image.png")} alt="" />
                            {this.imagePath &&
                                <img src={this.imagePath} alt="Card image cap" />}
                            <h3>{this.state.profile.name}</h3>
                            <ul style={{ marginTop: "20px" }}>
                                <li><Link to="/my_day">My day</Link></li>
                                <li><Link to="/important">Important</Link></li>
                                <li><Link to="/completed">Completed</Link></li>
                            </ul>
                        </div>
                        <div className="layout__task">
                            <div className="layout__task__todos">
                                <ul>
                                    <h4>My Day</h4>
                                    <button onClick={this.handleLogout}>Sign Out</button>
                                </ul>
                            </div>
                            <input type="text" name="title" value={this.state.title} onChange={this.change} placeholder="add task..." />
                            <input type="text" name="description" value={this.state.description} onChange={this.change} placeholder="add description" />
                            <button style={{ padding: "7px" }} onClick={this.addTask} disabled={this.state.loading}>
                                {this.state.loading ? <Spinner size="sm" color="secondary" /> : "Add"}
                            </button>
                            <input type="text" style={{ marginBottom: "15px" }} name="due_date" value={this.state.due_date} onChange={this.change} placeholder="add due_date" />
                            <div className="layout__task__list">
                                {this.state.task.map(item =>
                                    <ul>
                                        <li key={item.id}>
                                            <input type="checkbox"></input>
                                            <div className="judul"> {item.title} </div>
                                            <div>{item.description}</div>
                                            {item.due_date}
                                            <button>
                                                <img src={require("../assets/images/pen.png")} alt="" />
                                            </button>
                                            <button onClick={() => this.deleteTask(item.id)}>
                                                <img src={require("../assets/images/trash.png")} alt="" />
                                            </button>
                                        </li>
                                    </ul>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}
export default Login;