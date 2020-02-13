import React from 'react';
import {Link} from 'react-router-dom'

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            categoryId: parseInt(props.match.params.categoryId, 10)
        };
    }

    fetchGoods = (props) => {
        document.getElementById("filter").style.display = 'block';
        document.getElementById("clearFilter").style.display = 'none';
        fetch("http://localhost:8989/goods/categories/" +  this.state.categoryId)
            .then(res => res.json())
            .then((goods) => {
                this.setState({
                    goods: goods
                });
            })
    };

    // https://medium.com/@dcai900/how-to-refresh-data-when-using-react-router-link-396a2ddf8373
    componentWillReceiveProps(nextProps, nextContext) {
        this.fetchGoods(nextProps);
    }

    componentDidMount() {
        this.fetchGoods(this.props);
    }

    render() {
        const {goods} = this.state;
        return (
            <div>
                {goods.map((g, i) => (
                    <div key={i} id={g.id}>
                        <Link to={`/goods/categories/${this.state.categoryId}/${g.id}`}>{g.name}</Link>
                        <a> {g.cost} </a>
                        <a> {g.description} </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default GoodsList