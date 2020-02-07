import React, {Component} from "react";
import {getBasket} from "../../util/APIUtils";

class Basket extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            orderDetails: []
        }
    }

    componentDidMount() {
        getBasket().then((orderDetails) => {
            this.setState({
                orderDetails: orderDetails
            })
        })
    }

    render() {

        return (
            <div>
                <div className="width20 box-col">
                    {this.state.orderDetails.map((c, i) => (
                        <div key={i} id={c.id}>
                            {c.goods}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Basket