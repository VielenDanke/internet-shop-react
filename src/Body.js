import Welcome from "./Welcome";
import GoodsList from "./goods/body/GoodsList";
import GoodsAdd from "./goods/body/GoodsAdd";
import GoodsView from "./goods/body/GoodsView";
import GoodsEdit from "./goods/body/GoodsEdit";
import GoodsListWithFilter from "./goods/body/GoodsListWithFilter";
import React from "react";

import {Route, Switch} from "react-router-dom";
import GoodsDeleteConfirm from "./goods/body/GoodsDeleteConfirm";

class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome}/>
                {/* GoodsListWithFilter have to be before GoodsView */}
                <Route exact path='/goods/categories/:categoryId/filter' render={(props) => <GoodsListWithFilter authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:categoryId/:goodsId' render={(props) => <GoodsView authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:categoryId/:goodsId/add' render={(props) => <GoodsAdd authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:categoryId/:goodsId/edit' render={(props) => <GoodsEdit authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:categoryId/:goodsId/delete' render={(props) => <GoodsDeleteConfirm authenticated={this.props.authenticated} {...props}/>}/>
                <Route exact path='/goods/categories/:categoryId' render={(props) => <GoodsList authenticated={this.props.authenticated} {...props}/>}/>
            </Switch>
        )
    }
}

export default Body
