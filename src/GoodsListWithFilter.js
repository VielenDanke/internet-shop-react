import React from 'react';

class GoodsListWithFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: []
        };
    }

    fetchGoods = (props) => {
        const accessible = document.getElementById("accessible").checked;
        let lowCost = document.getElementById("lowCost").value;
        let highCost = document.getElementById("highCost").value;
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

        fetch("http://localhost:8989/goods/categories/" + parseInt(props.match.params.number, 10) + "/filter", {
            method: "POST",
            body: data,      //JSON.stringify(data),
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
                        <a href="#">{g.name}</a>
                        <a> {g.cost} </a>
                        <a> {g.description} </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default GoodsListWithFilter