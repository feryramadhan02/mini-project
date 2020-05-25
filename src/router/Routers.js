import React from "react";
import { Route } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import ImageUpload from "../components/ImageUpload";

const Routers = () => {
    return (
        <div>
            <Route path="/" component={Login} exact />
            <Route path="/sign_up" component={SignUp} exact />
            <Route path="/upload" component={ImageUpload} exact />
        </div>
    )
}

export default Routers;