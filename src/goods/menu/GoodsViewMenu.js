import React from 'react';
import {Link} from 'react-router-dom'

class GoodsViewMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.goodsId, 10),
            categoryId: parseInt(props.match.params.categoryId, 10),
            isAdmin: false
        };
    }

    isAdmin() {
        this.props.currentUser.authority.map(a => {
            if (a === "ROLE_ADMIN")
                return true;
        });
        return false;
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.setState({
    //         currentUser: nextProps.currentUser
    //     })
    // }

    componentDidMount() {
        this.props.currentUser.authority.map(a => {
            if (a === "ROLE_ADMIN")
                this.setState({isAdmin: true})
        });
    }

    render() {
        return (
            <div className="width20 box-col">
                {(this.state.isAdmin) ? (
                    <div>
                        <Link to={`/goods/categories/${this.state.categoryId}/${this.state.goodsId}/add`}>add</Link><br/><br/>
                        <Link to={`/goods/categories/${this.state.categoryId}/${this.state.goodsId}/edit`}>edit</Link><br/><br/>
                        <Link to={`/goods/categories/${this.state.categoryId}/${this.state.goodsId}/delete`}>delete</Link><br/><br/>
                    </div>
                ) : (
                    <div></div>
                )}
                <form>
                    <label>count:</label><br/><input type="text" id="count" name="count" size="2"/><br/>
                    <Link to={`/goods/toBasket/${this.state.goodsId}`}>to basket</Link>
                </form>
            </div>
        )
    }
}

export default GoodsViewMenu