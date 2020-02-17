import React from 'react';
import {requestWithToken} from '../../util/APIUtils';
import Alert from "react-s-alert";

class GoodsDeleteConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.goodsId, 10),
            categoryId: parseInt(props.match.params.categoryId, 10),
            requestComplited: false
        };
    }

    fetchDeleteGoods = (props) => {
        requestWithToken({
            url: "http://localhost:8989/goods/" + this.state.goodsId,
            method: "DELETE"
        })
            .then((response) => {
                if (response.status === 204) {
                    this.setState({requestComplited: true});
                    Alert.success("Record was deleted.");
                    this.props.history.push("/goods/categories/" + this.state.categoryId);
                } else {
                    this.setState({requestComplited: false})
                    Alert.error("Error. Record wasn't deleted.");
                    this.props.history.push("/goods/categories/" + this.state.categoryId + "/" + this.state.goodsId);
                }
            })
    };

    componentDidMount() {
        this.fetchDeleteGoods(this.props);
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default GoodsDeleteConfirm