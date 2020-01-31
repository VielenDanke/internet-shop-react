import React from 'react';
import {Link} from 'react-router-dom'

class GoodsCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8989/goods/categories")
            .then(res => res.json())
            .then((categories) => {
                this.setState({
                    categories: categories
                });
            });
    }

    render() {
        const {categories} = this.state;

        return (
            <div className="width20 box-col">
                {categories.map((c, i) => (
                    <div key={i} id={c.id}>
                        <Link to={`/goods/categories/${c.id}`}>{c.name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default GoodsCategories