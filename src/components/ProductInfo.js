import React, {useState} from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import data from "./data";
import './ProductInfo.css'

export default function ProductInfo(props) {
    // console.log(props.match.params.id)
    const product = data.products.find(x => x.Id === props.match.params.id)

    const [cart, setCart] = useState([{
        text: "Show info"
    }])

    return(
        <div className="details">
            <h1 className="details__name">{product.Name}</h1>
            <div className="details__main">
                <div className="details__main-image">
                    <img src={product.Image} alt={product.Name} width="360"/>
                </div>
                <div className="details__main-info">
                    <ul>
                        <li>
                            <h2>Modal: {product.Modal}</h2>
                        </li>
                        <li>
                            <h3>MADE BY: {product.MadeBy}</h3>
                        </li>
                        <li className="details__main-info-price">
                            <h2>Price: ${product.Price}</h2>
                        </li>
                        <li>
                            <b>Some info about Product:</b>
                            <div>
                                {product.Info}
                            </div>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <button href="/" className="btn btn--btp btn--disable">Back To Products</button>
                            </Link>
                            <button className="btn btn--incart">In Cart</button>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
};