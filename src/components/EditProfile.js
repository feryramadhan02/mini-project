// import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";
// import "../assets/style/Login.scss";
// import "../assets/style/EditProfile.scss";
// import axios from "axios";
// import Swal from 'sweetalert2';

// const baseUrl = "https://be-mini-project.herokuapp.com/api/profile/"

// class EditProfile extends React.Component {
//     state = {
//         id: "",
//         name: "",
//         email: "",
//         password: ""
//     }

//     componentDidMount() {
//         let token = localStorage.getItem('token')
//         // let id = this.props.location && this.props.location.state && this.props.location.state.id;
//         // if (!id) {
//         //     this.props.history.goBack();
//         //     return;
//         // } else {
//         //     this.setState({ id: id })
//         // }

//         // axios({
//         //     method: "POST",
//         //     url: baseUrl,
//         //     headers: {
//         //         Authorization: token
//         //     },
//         //     data: {
//         //         name: this.state.name,
//         //         email: this.state.email,
//         //         password: this.state.password
//         //     }
//         // })
//         //     .then(res => {
//         //         if (res.data.success) {
//         //             this.setState({
//         //                 name: 'profile berhasil di edit'
//         //             })
//         //         }
//         //     })
//         //     .catch(err => {
//         //         Swal.fire({
//         //             icon: 'error',
//         //             text: err.response.data.message
//         //         })
//         //     })
//     }


//     handleOnChange = (e) => {
//         e.preventDefault();

//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         let token = localStorage.getItem('token')

//         this.setState({ loading: true })
//         // Request Edit User
//         axios({
//             method: "PUT",
//             url: `${baseUrl}${id}`,
//             headers: {
//                 Authorization: token
//             },
//             data: {
//                 id: this.state.id,
//                 name: this.state.name
//             }
//         })
//             .then(res => {
//                 this.setState({ loading: false })

//                 if (res.data.success) {
//                     Swal.fire({
//                         icon: 'success',
//                         text: 'user berhasil diedit!'
//                     })
//                         .then(() => {
//                             this.props.history.replace("/")
//                         })
//                 }
//             })
//             .catch(err => {
//                 this.setState({ loading: false })

//                 Swal.fire({
//                     icon: 'error',
//                     text: err.response.data.message
//                 })
//             })
//     }


//     handleLogout = (e) => {
//         e.preventDefault()
//         localStorage.removeItem("token")
//         this.props.history.replace("/")
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className="container">
//                     <div className="layout">
//                         <div className="layout__text-wrapper">
//                             <ul>
//                                 <li><Link to="/my_day">My day</Link></li>
//                                 <li><Link to="/important">important</Link></li>
//                                 <li><Link to="/completed">Completed</Link></li>
//                             </ul>
//                         </div>
//                         <div className="layout__task">
//                             <div className="layout__task__edit">
//                                 <ul>
//                                     <h4>Edit your Profile</h4>
//                                     <button onClick={this.handleLogout}>Sign Out</button>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <input type="text" name="name" placeholder="enter user fullname" />
//                                 <button onClick={this.handleSubmit}>Submit</button>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }
// export default EditProfile;