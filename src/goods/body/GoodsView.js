import React from 'react';
import {Link} from 'react-router-dom'

class GoodsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: ''
        };
    }

    fetchGoods = (props) => {
        fetch("http://localhost:8989/goods/" +  parseInt(props.match.params.number, 10))
            .then(res => res.json())
            .then((goods) => {
                this.setState({
                    goods: goods
                });
            })
    };

    componentDidMount() {
        this.fetchGoods(this.props);
    }

    render() {
        const {goods} = this.state;
        return (
            <div>
                    <div id={this.state.goods.id}>
                        <a>{this.state.goods.name}</a>
                        <a> {this.state.goods.cost} </a>
                        <a> {this.state.goods.description} </a>
                    </div>
            </div>
        )
    }
}

export default GoodsView