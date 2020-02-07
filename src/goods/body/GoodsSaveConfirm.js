import React from 'react';
import {Link} from 'react-router-dom';

class GoodsSaveConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsId: parseInt(props.match.params.number, 10),
            requestComplited: false
        };
    }

    fetchSaveGoods = (props) => {
        let name = document.getElementById("name").value;
        let cost = document.getElementById("cost").value;
        let count = document.getElementById("count").value;
        let description = document.getElementById("description").value;

        const data = "{\n" +
            "            \"id\" : " + this.state.goodsId + ",\n" +
            "            \"name\" : " + name + ",\n" +
            "            \"cost\" : " + cost + ",\n" +
            "            \"count\" : " + count + ",\n" +
            "            \"description\" : " + description + "\n" +
            "        }";


        fetch("http://localhost:8989/goods/" + this.state.goodsId, {
            method: "PUT",
            body: data,
            headers: {"Content-Type": "application/json"}
        })
            .then((response) => {
                if (response.status === 204) {
                    this.setState({requestComplited: true});
                } else {
                    this.setState({requestComplited: false})
                }
            })
    };

    componentDidMount() {
        this.fetchSaveGoods(this.props);
    }

    render() {
        return (
            <div>
                {(this.state.requestComplited) ? (
                    <div>
                        Goods was safed. <br/><br/>
                    </div>
                ) : (
                    <div>
                        Error.<br/><br/>
                    </div>
                )}
                <Link to={`/goods/${this.state.goodsId}`}>go back</Link> <br/><br/>
                <Link to={`/`}>go to main page</Link> <br/><br/>
            </div>
        )
    }
}

export default GoodsSaveConfirm