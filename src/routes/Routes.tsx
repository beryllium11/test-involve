import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../components/main/Main";
import Info from "../components/info/Info";
import Success from "../components/success/Success";

export const PATH = {
    MAIN: '/main',
    INFO: '/info',
    SUCCESS: '/success'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} render={() => <Main/>}/>
                <Route path={PATH.INFO} render={() => <Info/>}/>
                <Route path={PATH.SUCCESS} render={() => <Success />}/>
            </Switch>
        </div>
    );
}
