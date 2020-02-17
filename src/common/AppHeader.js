import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './AppHeader.css';
import {IS_ADMIN, IS_USER} from "../constants";

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: "false",
            isUser: "false",
        };
    }

    componentDidMount() {
        if (localStorage.getItem(IS_ADMIN)) {
            this.setState({isAdmin: localStorage.getItem(IS_ADMIN)});
        } else {
            this.setState({isAdmin: "false"});
        }
        if (localStorage.getItem(IS_USER)) {
            this.setState({isUser: localStorage.getItem(IS_USER)});
        } else {
            this.setState({isUser: "false"});
        }
    }


    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Internet shop</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            {this.props.authenticated ? (
                                <ul>
                                    {(this.state.isUser == "true") ? (
                                        <li>
                                            <NavLink to="/basket">Basket</NavLink>
                                        </li>
                                    ) : (
                                        <li></li>
                                    )}
                                    <li>
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                    <li>
                                        <a href="/" onClick={this.props.onLogout}>Logout</a>
                                    </li>
                                </ul>
                            ) : (
                                <ul>
                                    <li>
                                        <NavLink to="/login">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signup">Signup</NavLink>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;