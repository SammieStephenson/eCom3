import axios from "axios";
import React from "react";

// class Drinks extends React.Component {
//     componentDidMount() {
//         axios.get("http://localhost:4000/api/products").then((res) => {
//             const products = res.data;
//             this.setState({ products });
//         });
//     }
render() {
    return (
        <>
            <div className="product-container">
                {this.state.products.map((card) => {
                    return (
                        <div className="product">
                            <img src={card.image} alt={card.name} />
                            <h2 className="title">{card.name}</h2>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <h3>{card.description}</h3>
                            <p className="price">${card.price}</p>
                            <a href="contact.html" className="button">
                                Add to Cart
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Jewelry;