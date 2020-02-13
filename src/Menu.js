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
                <Route exact path='/goods/categories/:categoryId' component={GoodsFilters}/>}/>
                <Route exact path='/goods/categories/:categoryId/filter' component={GoodsFilters}/>}/>
                <Route exact path='/goods/categories/:categoryId/:goodsId' render={(props) => <GoodsViewMenu authenticated={this.props.authenticated} currentUser={this.props.currentUser} {...props}/>}/>
                {/*<Route exact path='/goods/edit/:number' render={(props) => <GoodsEditMenu authenticated={this.props.authenticated } currentUser={this.props.currentUser} {...props}/>}/>*/}
            </Switch>
        )
    }
}

export default Menu
