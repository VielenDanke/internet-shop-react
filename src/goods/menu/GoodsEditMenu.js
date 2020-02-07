import React from 'react';
import {Link} from 'react-router-dom'

class GoodsEditMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.number, 10)
        };
    }

    render() {
        return (
            <div className="width20 box-col">
                <Link to={`/goods/save/${this.state.goodsId}`}>save</Link><br/><br/>
                <Link to={`/goods/${this.state.goodsId}`}>cancel</Link>
            </div>
        )
    }
}

export default GoodsEditMenu