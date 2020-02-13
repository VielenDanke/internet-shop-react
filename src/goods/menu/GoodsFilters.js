import React from 'react';
import {Link} from 'react-router-dom'

class GoodsFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: parseInt(props.match.params.categoryId, 10),
        };
    }

    render() {
        return (
            <div className="width20 box-col filters">
                <form>
                    <label>only accessible:</label><input type="checkbox" id="accessible" name="accessible"/><br/><br/>
                    <label>from:</label><input type="text" id="lowCost" name="lowCost" size="2"/>
                    <label>to:</label><input type="text" id="highCost" name="highCost" size="2"/><br/><br/>
                    <label>by name:</label><br/><input type="text" id="byName" name="byName"/><br/>
                    <label>by description:</label><br/><input type="text" id="byDescription" name="byDescription"/><br/><br/>
                    <Link id="filter" to={`/goods/categories/${this.state.categoryId}/filter`}>Filter</Link><br/><br/>
                    <Link id="clearFilter" to={`/goods/categories/${this.state.categoryId}`}>clear filters</Link>
                </form>
            </div>
        )
    }
}

export default GoodsFilters