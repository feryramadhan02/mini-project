import React from "react";
import { Route } from "react-router-dom";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";
import SignUp from "../page/SignUp";
import Thanks from "../page/Thanks";

const Routers = () => {
    return (
        <div>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/sign_up" component={SignUp} exact />
            <Route path="/thanks" component={Thanks} exact />
        </div>
    )
}

export default Routers;