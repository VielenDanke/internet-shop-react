import React from 'react';

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
                    <form>
                        <input type="text" id="goodsId" value={this.state.goods.id} hidden/>
                        <label>name:</label>
                        <input type="text" class="noborder" id="goodsName" value={this.state.goods.name}/> <br/>
                        <label>cost:</label>
                        <input type="text" class="noborder" id="goodsCost" value={this.state.goods.cost}/>  <br/>
                        <label>description:</label>
                        <input type="text" class="noborder" id="goodsDescription" value={this.state.goods.description}/>  <br/>
                    {/*// </div>*/}
                    </form>
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