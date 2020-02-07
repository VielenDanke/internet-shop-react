import React from 'react';
import {Link} from 'react-router-dom';

class GoodsToBasketConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.number, 10),
            requestComplited: false
        };
    }

    fetchToBasket = (props) => {
        // fetch("http://localhost:8989/goods/toBasket", {
        //     method: "POST",
        //     data:
        // })
        //     .then((response) => {
        //         if (response.status === 204) {
        //             this.setState({requestComplited: true});
        //         } else {
        //             this.setState({requestComplited: false})
        //         }
        //     })
    };

    componentDidMount() {
        this.fetchToBasket(this.props);
    }

    render() {
        return (
            <div>
                {(this.state.requestComplited) ? (
                    <div>
                        Goods was added to basket. <br/><br/>
                        <a href="#">go to basket</a> <br/><br/>
                        <Link to={`/goods/${this.state.goodsId}`}>go to back</Link> <br/><br/>
                        <Link to={`/`}>go to main page</Link> <br/><br/>
                    </div>
                ) : (
                    <div>
                        Error.<br/><br/>
                        <Link to={`/goods/${this.state.goodsId}`}>go to back</Link> <br/><br/>
                        <Link to={`/`}>go to main page</Link> <br/><br/>
                    </div>
                )}
            </div>
        )
    }
}

export default GoodsToBasketConfirm