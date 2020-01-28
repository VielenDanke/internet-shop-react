import Welcome from "./Welcome";
import GoodsList from "./GoodsList";
import GoodsListWithFilter from "./GoodsListWithFilter";
import React from "react";

import {Route, Switch} from "react-router-dom";

class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/goods/categories/:number' render={(props) => <GoodsList authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:number/filter' render={(props) => <GoodsListWithFilter authenticated={this.props.authenticated} {...props}/>}/>
            </Switch>
        )
    }
}

export default Body
