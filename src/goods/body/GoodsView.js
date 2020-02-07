import React from 'react';
import {Link} from 'react-router-dom'

class GoodsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: '',
            requestComplited: true,
            categoryId: parseInt(props.match.params.categoryId, 10),
            goodsId: parseInt(props.match.params.goodsId, 10)
        };
    }

    fetchGoods = (props) => {
        fetch("http://localhost:8989/goods/" +  this.state.goodsId)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({requestComplited: true});
                } else {
                    this.setState({requestComplited: false})
                }
                return response;
            })
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
                {(this.state.requestComplited) ? (
                    <div id={this.state.goods.id}>
                        <a>{this.state.goods.name}</a>
                        <a> {this.state.goods.cost} </a>
                        <a> {this.state.goods.description} </a>
                    </div>
                ) : (
                    <div>
                        Record not found.<br/><br/>
                    </div>
                )}
            </div>
        )
    }
}

export default GoodsView