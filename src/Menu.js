import React from "react";

import {Route, Switch} from "react-router-dom";
import Categories from "./Categories";
import Filters from "./Filters";

class Menu extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Categories}/>
                <Route path='/goods/categories/:number' component={Filters}/>}/>
            </Switch>
        )
    }
}

export default Menu
