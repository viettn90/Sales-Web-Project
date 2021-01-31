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
                    <td><b>$1200</b></td>
                    <td>
                        <button className="btn--add">-</button>
                        <input className="qty__textbox" defaultValue="1"/>
                        <button className="btn--add">+</button>
                    </td>
                    <td>X</td>
                    <td><b>Item total: $1200</b></td>
                </tr>
            </table>
            <div className="cart__bill">
                <button className="btn--clear">CLEAR CART</button>
                <div>
                    <h2>SUBTOTAL: $3000</h2>
                    <h2>TAX: $300</h2>
                    <h2>TOTAL: $3000</h2>
                </div>
            </div>
        </div>
    );
}

export default MyCart;