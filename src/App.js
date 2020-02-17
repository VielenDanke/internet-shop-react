import React from 'react';
import './App.css';

import Header from "./Header.js";
import Main from "./Main.js";
import {getCurrentUser, login} from "./util/APIUtils";
import {ACCESS_TOKEN, IS_ADMIN, IS_USER} from "./constants";

import Alert from 'react-s-alert';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        }

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    isAdmin(currentUser) {
        const n = currentUser.authority.length;
        for (let i = 0; i < n; i++) {
            if (currentUser.authority[i] == 'ROLE_ADMIN') {
                return "true";
            }
        }
        return "false";
    }

    isUser(currentUser) {
        const n = currentUser.authority.length;
        for (let i = 0; i < n; i++) {
            if (currentUser.authority[i] == 'ROLE_USER') {
                return "true";
            }
        }
        return "false";
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            loading: "true"
        });

        getCurrentUser()
            .then(response => {
                localStorage.setItem(IS_ADMIN, this.isAdmin(response));
                localStorage.setItem(IS_USER, this.isUser(response));
                this.setState((state, props) => ({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                }));
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(IS_ADMIN)
        this.setState({
            authenticated: false,
            currentUser: null
        });
        Alert.success("You're safely logged out!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        return (
            <div>
                <Header authenticated={this.state.authenticated}
                        currentUser={this.state.currentUser}
                        loading={this.state.loading}
                        onLogout={this.handleLogout}
                        onLogin={this.loadCurrentlyLoggedInUser}
                />
                <Main authenticated={this.state.authenticated} currentUser={this.state.currentUser}/>
            </div>
        );
    }
}

export default App;
