import React from 'react';
import {Link} from 'react-router-dom';
import {IS_ADMIN, IS_USER} from "../../constants";
import {requestWithToken} from "../../util/APIUtils";
import Alert from 'react-s-alert';

class GoodsViewMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.goodsId, 10),
            categoryId: parseInt(props.match.params.categoryId, 10),
            isAdmin: "false",
            isUser: "false",
            currentUser: props.currentUser
        };
    }

    componentDidMount() {
        if (localStorage.getItem(IS_ADMIN)) {
            this.setState({isAdmin: localStorage.getItem(IS_ADMIN)});
        } else {
            this.setState({isAdmin: "false"});
        }
        if (localStorage.getItem(IS_USER)) {
            this.setState({isUser: localStorage.getItem(IS_USER)});
        } else {
            this.setState({isUser: "false"});
        }
    }

    fetchToBasket = (props) => {
        let goodsId = document.getElementById("goodsId").value;
        let goodsCost = document.getElementById("goodsCost").value;
        let count = document.getElementById("count").value;

        const orderDetailsTO = "{\n" +
            "            \"count\" : " + count + ",\n" +
            "            \"cost\" : " + goodsCost + ",\n" +
            "            \"goodsId\" : " + goodsId + "\n" +
            "        }";

        requestWithToken({
            url: "http://localhost:8989/goods/toBasket",
            method: "POST",
            body: orderDetailsTO
        }).then((response) => {
                if (response.status === 201) {
                    Alert.success("Goods was added to basket")
                } else {
                    Alert.error("Error. Goods wasn't added to basket")
                }
            }
        )
    }

    render() {
        return (
            <div className="width20 box-col">
                {this.props.authenticated ? (
                    <div>
                        {(this.state.isAdmin == "true") ? (
                            <div>
                                <Link
                                    to={`/goods/categories/${this.state.categoryId}/${this.state.goodsId}/add`}>add</Link><br/><br/>
                                <Link
                                    to={`/goods/categories/${this.state.categoryId}/${this.state.goodsId}/edit`}>edit</Link><br/><br/>
                                <Link
                                    to={`/goods/categories/${this.state.categoryId}/${this.state.goodsId}/delete`}>delete</Link><br/><br/>
                            </div>
                        ) : (
                            <div>
                                {(this.state.isUser == "true") ? (
                                    <form>
                                        <label>count:</label><br/><input type="text" id="count" name="count"
                                                                         size="2"/><br/>
                                        <a href="#" onClick={this.fetchToBasket}>to basket</a>
                                    </form>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        )
    }
}

export default GoodsViewMenu;