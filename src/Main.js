import Menu from "./Menu";
import Body from "./Body";
import React from "react";
import GoodsViewMenu from "./goods/menu/GoodsViewMenu";

class Main extends React.Component {
    render() {
        return (
            <div className="box-table">
                <div className="box-row">
                    <Menu authenticated={this.props.authenticated} currentUser={this.props.currentUser}/>
                    <div className="width80 box-col">
                        <Body authenticated={this.props.authenticated} currentUser={this.props.currentUser}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main