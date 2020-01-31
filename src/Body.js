import Welcome from "./Welcome";
import GoodsList from "./goods/body/GoodsList";
import GoodsView from "./goods/body/GoodsView";
import GoodsListWithFilter from "./goods/body/GoodsListWithFilter";
import React from "react";

import {Route, Switch} from "react-router-dom";
import GoodsToBasketConfirm from "./goods/body/GoodsToBasketConfirm";

class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/goods/:number' render={(props) => <GoodsView authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:number' render={(props) => <GoodsList authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:number/filter' render={(props) => <GoodsListWithFilter authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/toBasket/:number' render={(props) => <GoodsToBasketConfirm authenticated={this.props.authenticated} {...props}/>}/>
            </Switch>
        )
    }
}

export default Body
