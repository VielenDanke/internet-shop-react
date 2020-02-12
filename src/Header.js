import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AppHeader from './common/AppHeader';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';
import Profile from './user/profile/Profile';
import OAuth2RedirectHandler from './user/oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import PrivateRoute from './common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import Basket from "./user/profile/Basket";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.loading) {
            return <LoadingIndicator />
        }

        return (
            <div className="app">
                <div className="app-top-box">
                    <AppHeader authenticated={this.props.authenticated}
                               onLogout={this.props.onLogout}
                    />
                </div>
                <div className="app-body">
                    <Switch>
                        {/*<Route exact path="/" component={Categories}></Route>*/}
                        <PrivateRoute path="/profile" authenticated={this.props.authenticated} currentUser={this.props.currentUser}
                                      component={Profile}></PrivateRoute>
                        <PrivateRoute path="/basket" authenticated={this.props.authenticated} currentUser={this.props.currentUser}
                                      component={Basket}></PrivateRoute>
                        <Route path="/login"
                               render={(props) => <Login authenticated={this.props.authenticated }
                                                         onLogin = {this.props.onLogin}
                                                         {...props} />}>
                        </Route>
                        <Route path="/signup"
                               render={(props) => <Signup authenticated={this.props.authenticated} {...props} />}></Route>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                        {/*<Route component={NotFound}></Route>*/}
                    </Switch>
                </div>
                <Alert stack={{limit: 3}}
                       timeout = {3000}
                       position='top-right' effect='slide' offset={65} />
            </div>
        );
    }
}

export default Header