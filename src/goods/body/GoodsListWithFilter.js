import React from 'react';
import {Link} from "react-router-dom";

class GoodsListWithFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            categoryId: parseInt(props.match.params.categoryId, 10)
        };
    }

    fetchGoods = (props) => {
        const accessible = document.getElementById("accessible").checked;
        let lowCost = document.getElementById("lowCost").value;
        let highCost = document.getElementById("highCost").value;
        document.getElementById("filter").style.display = 'none';
        document.getElementById("clearFilter").style.display = 'block';
        let inRangeOfCost = false;
        if (lowCost!=="" && highCost!=="") {
            inRangeOfCost = true;
        } else {
            lowCost = "0.00";
            highCost = "0.00";
        }
        let nameLike = document.getElementById("byName").value;
        let nameLikeActive = false;
        if (nameLike!=="") {
            nameLikeActive = true;
        }
        let descriptionLike = document.getElementById("byDescription").value;
        let descriptionLikeActive = false;
        if (descriptionLike!=="") {
            descriptionLikeActive = true;
        }


        const data = "{\n" +
            "            \"accessibleGoodsFilter\": {\n" +
            "            \"active\" : " + accessible + "\n" +
            "        },\n" +
            "            \"inRangeOfCostGoodsFilter\": {\n" +
            "            \"active\" : " + inRangeOfCost + ",\n" +
            "                \"lowCost\" : " + lowCost + ",\n" +
            "                \"highCost\" : " + highCost + "\n" +
            "        },\n" +
            "            \"nameLikeFilter\": {\n" +
            "            \"active\" : "+ nameLikeActive +",\n" +
            "                \"nameLike\": \"" + nameLike + "\"\n" +
            "        },\n" +
            "            \"descriptionLikeFilter\": {\n" +
            "            \"active\" : " + descriptionLikeActive + ",\n" +
            "                \"descriptionLike\": \"" + descriptionLike + "\"\n" +
            "        }}";

        fetch("http://localhost:8989/goods/categories/" + this.state.categoryId + "/filter", {
            method: "POST",
            body: data,
            headers: {"Content-Type": "application/json"}
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

export default GoodsListWithFilter