import React, { useState, useEffect } from 'react';
import './MyCart.css'



function MyCart(props) {

    return (
        <div className="cart">
            <caption><h1>YOUR CART</h1></caption>
            <table>
                <tr>
                    <th>PRODUCTS</th>
                    <th>NAME OF PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>REMOVE</th>
                    <th>TOTAL</th>
                </tr>
                <tr>
                    <td>Image</td>
                    <td>Samsung</td>
                    <td>1200</td>
                    <td>1</td>
                    <td>X</td>
                    <td>1200</td>
                </tr>
            </table>
            <div className="cart__bill">
                <button>CLEAR CART</button>
                <div>
                    <h2>SUBTOTAL: $</h2>
                    <h2>TAX: $</h2>
                    <h2>TOTAL: $</h2>
                </div>
            </div>
        </div>
    );
}

export default MyCart;