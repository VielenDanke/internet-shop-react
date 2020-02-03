import React from 'react';
import {Link} from 'react-router-dom'

class GoodsViewMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.number, 10)
        };
    }

    render() {
        return (
            <div className="width20 box-col">
                <a href='#'>add</a><br/><br/>
                <a href='#'>edit</a><br/><br/>
                <a href={`/goods/delete/${this.state.goodsId}`}>delete</a><br/><br/>
                <form>
                    <label>count:</label><br/><input type="text" id="count" name="count" size="2"/><br/>
                    <Link to={`/goods/toBasket/${this.state.goodsId}`}>to basket</Link>
                </form>
            </div>
        )
    }
}

export default GoodsViewMenu