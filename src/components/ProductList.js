import React from "react";
import './ProductList.css';
import data from './data'
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function ProductList() {
    
    const [infos, setInfo] = useState([]);

   
    return(
        <div className="main">
            <div className="name_main">
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="product_list_container">
                {data.products.map(product => 
                    <div className="item">
                      <div>
                        <Link to={'/product/' + product.Id}>
                            <img src={product.Image} alt="Samsung s21" width="200"/>
                        </Link>
                          
                      </div>
                      <div className="name">
                          <span>
                            <Link to={'/product/' + product.Id}>{product.Name}</Link>
                          </span>
                      </div>
                      <div className="price">
                          ${product.Price}
                      </div>
                  </div>  
                )}
                
            </div>
        </div>
    )
}
