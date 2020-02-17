import React from 'react';
import {Link} from 'react-router-dom';
import {requestWithToken} from '../../util/APIUtils';
import Alert from "react-s-alert";

class GoodsAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            cost: '',
            count: '',
            description: '',
            categoryId: parseInt(props.match.params.categoryId, 10)
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    fetchGoods = (props) => {
        fetch("http://localhost:8989/goods/" + this.state.id)
            .then(res => res.json())
            .then((goods) => {
                this.setState({
                    name: goods.name,
                    cost: goods.cost,
                    count: goods.count,
                    description: goods.description
                });
            })
    };

    componentDidMount() {
        this.fetchGoods(this.props);
    }

    fetchSaveGoods = (props) => {
        let name = document.getElementById("name").value;
        let cost = document.getElementById("cost").value;
        let count = document.getElementById("count").value;
        let description = document.getElementById("description").value;

        const data = "{\n" +
            "            \"name\" : \"" + name + "\",\n" +
            "            \"cost\" : " + cost + ",\n" +
            "            \"count\" : " + count + ",\n" +
            "            \"description\" : \"" + description + "\",\n" +
            "            \"categoryId\" : " + this.state.categoryId + "\n" +
            "        }";

        requestWithToken({
            url: "http://localhost:8989/goods/",
            method: "POST",
            body: data
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    this.setState({requestComplited: false});
                    Alert.error("Error. Record wasn't created.");
                    this.props.history.push("/goods/categories/" + this.state.categoryId);
                }
            })
            .then((goods) => {
                this.setState({
                    id: goods.id
                });
                Alert.success("Record was created.");
                this.props.history.push("/goods/categories/" + this.state.categoryId + "/" + this.state.id);
            });
    }

    render() {
        const {goods} = this.state;
        return (
            <div>
                <form>
                    <label>name: </label>
                    <input type="text"
                           name="name"
                           id="name"
                           value={this.state.name}
                           onChange={this.handleInputChange}
                    /><br/><br/>
                    <label>cost: </label>
                    <input type="text"
                           name="cost"
                           id="cost"
                           value={this.state.cost}
                           onChange={this.handleInputChange}
                    /><br/><br/>
                    <label>count: </label>
                    <input type="text"
                           name="count"
                           id="count"
                           value={this.state.count}
                           onChange={this.handleInputChange}
                    /><br/><br/>
                    <label>description: </label>
                    <input type="text"
                           name="description"
                           id="description"
                           value={this.state.description}
                           onChange={this.handleInputChange}
                    /><br/><br/>
                </form>
                <a href="#" onClick={this.fetchSaveGoods}>save</a>
                <Link to={`/goods/categories/${this.state.categoryId}/${this.state.id}`}>cancel</Link>
            </div>
        )
    }
}

export default GoodsAdd