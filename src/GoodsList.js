import React from 'react';

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: []
        };
    }

    fetchGoods = (props) => {
        fetch("http://localhost:8989/goods/categories/" +  parseInt(props.match.params.number, 10))
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
                        <a href="#">{g.name}</a>
                        <a> {g.cost} </a>
                        <a> {g.description} </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default GoodsList