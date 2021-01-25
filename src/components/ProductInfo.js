import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import data from "./data";

export default function ProductInfo(props) {
    // console.log(props.match.params.id)
    const product = data.products.find(x => x.Id === props.match.params.id)
    return(
        <div>
            <h1>{product.Name}</h1>
            
        </div>
    )
};