import Categories from "./Categories";
import Body from "./Body";
import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div className="box-table">
                <div className="box-row">
                    <Categories />
                    <div className="width80 box-col">
                        <Body authenticated={this.props.authenticated}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main