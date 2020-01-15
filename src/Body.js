import Welcome from "./Welcome";
import Goods from "./Goods";
import React from "react";

import {Route, Switch} from "react-router-dom";

class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome}/>
                <Route path='/goods/categories/:number' component={Goods}/>
            </Switch>
        )
    }
}

export default Body
