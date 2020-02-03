import React from 'react';
import {Link} from 'react-router-dom';

class GoodsDeleteConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.number, 10),
            requestComplited: false
        };
    }

    fetchToBasket = (props) => {
        // здесь отправить запрос наудаление товара из корзины
        // если запрос успешный то requestComplited = true
    };

    componentDidMount() {
        this.fetchToBasket(this.props);
    }

    render() {
        return (
            <div>
                {(this.state.requestComplited) ? (
                    <div>
                        Goods was deleted. <br/><br/>
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

export default GoodsDeleteConfirm