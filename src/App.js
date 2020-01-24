import React from 'react';
import './App.css';

import Header from "./Header.js";
import Main from "./Main.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: true,
            currentUser: null,
            loading: false
        }
    }

    render() {
        return (
            <div>
                <Header authenticated={this.state.authenticated} />
                <Main authenticated={this.state.authenticated}/>
            </div>
        );
    }
}

export default App;
