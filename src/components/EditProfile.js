import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/EditProfile.scss";
import axios from "axios";
import Swal from 'sweetalert2';

//const baseUrl = "https://be-mini-project.herokuapp.com/api/profile/"

class EditProfile extends React.Component {
    state = {
        image: {
            value: "",
            file: null
        },
        name: "",
        email: "",
        password: ""
    }


    handleOnChange = (e) => {
        e.preventDefault()

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFileOnChange = (e) => {
        e.preventDefault()

        this.setState({
            image: {
                value: e.target.value,
                file: e.target.files[0]
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')

        // Declare form Data
        let formData = new FormData()
        // Masukin key:value ke form data
        formData.append("name", this.state.name)
        formData.append("email", this.state.email)
        formData.append("password", this.state.password)
        formData.append("image", this.state.image.file)

        if (!token) {
            this.props.history.replace('/dashboard')
        } else {
            this.setState({ loading: true })

            axios({
                method: "PUT",
                url: "https://be-mini-project.herokuapp.com/api/profile/",
                headers: {
                    Authorization: token
                },
                data: formData
            })
                .then(res => {
                    this.setState({ loading: false })

                    if (res.data.success) {
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
                        text: 'error'
                    })
                })
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
                            <ul>
                                <li><Link to="/my_day">My day</Link></li>
                                <li><Link to="/important">important</Link></li>
                                <li><Link to="/completed">Completed</Link></li>
                            </ul>
                        </div>
                        <div className="layout__task">
                            <div className="layout__task__edit">
                                <ul>
                                    <h4>Edit your Profile</h4>
                                    <button onClick={this.handleLogout}>Sign Out</button>
                                </ul>
                            </div>
                            <div>
                                <input type="file" id="exampleCustomFileBrowser" name="customFile" onChange={this.handleFileOnChange} placeholder="enter user fullname" />
                                <button style={{ marginLeft: "120px" }} onClick={this.handleSubmit}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default EditProfile;