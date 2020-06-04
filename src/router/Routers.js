import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";
import SignUp from "../page/SignUp";
import EditProfile from "../components/EditProfile";

//import PrivateRoute from './route/PrivateRoute';

const Routers = () => {
    return (
        <div>
            <Switch>
                {/* <PrivateRoute path="/" component={Login} exact /> jika memakai PrivateRoute */}
                <Route path="/" component={Login} exact />
                <Route path="/sign_up" component={SignUp} exact />
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/editprofile" component={EditProfile} exact />
                <Route component={() => "404 Not Found"} />
            </Switch>

        </div>
    )
}

export default Routers;