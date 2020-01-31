import React from "react";

import {Route, Switch} from "react-router-dom";
import GoodsCategories from "./goods/menu/GoodsCategories";
import GoodsFilters from "./goods/menu/GoodsFilters";
import GoodsViewMenu from "./goods/menu/GoodsViewMenu";

class Menu extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={GoodsCategories}/>
                <Route exact path='/goods/categories/:number' component={GoodsFilters}/>}/>
                <Route exact path='/goods/:number' render={(props) => <GoodsViewMenu authenticated={this.props.authenticated} {...props}/>}/>
            </Switch>
        )
    }
}

export default Menu
