import React from "react";
import './ProductList.css';
import data from './data'
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function ProductList() {
    
    const [infos, setInfo] = useState([]);

   
    return(
        <div className="main">
            <div className="main__name">
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="main__products-list">
                {data.products.map(product => 
                    <div className="main__products-list-item">
                      <div>
                        <Link to={'/product/' + product.Id}>
                            <img src={product.Image} alt="Samsung s21" width="200"/>
                        </Link>
                          
                      </div>
                      <div className="main__products-list-item-name">
                          <span>
                            <Link to={'/product/' + product.Id}>{product.Name}</Link>
                          </span>
                      </div>
                      <div className="main__products-list-item-price">
                          ${product.Price}
                      </div>
                  </div>  
                )}
                
            </div>
        </div>
    )
}
