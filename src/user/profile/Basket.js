import React, {Component} from "react";
import {confirmOrder, getBasket, requestWithToken} from "../../util/APIUtils";
import Alert from "react-s-alert";

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

    fetchConfirmOrder = (props) => {
        requestWithToken({
            url: "http://localhost:8989/goods/basket/order",
            method: "GET"
        })
            .then((response) => {
                if (response.status === 202) {
                    this.setState({requestComplited: true});
                    Alert.success("Order was confirmed.");
                } else {
                    this.setState({requestComplited: false})
                    Alert.error("Order is not correct.");
                }
            })
    };

    render() {

        return (
            <div>
                <div className="width20 box-col">
                    {this.state.orderDetails.map((c, i) => (
                        <div key={c.id}>
                            {c.goodsName}
                            {c.cost}
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={this.fetchConfirmOrder}>Confirm order</button>
                </div>
            </div>
        );
    }
}

export default Basket