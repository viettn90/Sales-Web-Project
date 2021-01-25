import React from "react";
import './Header.css'

export default function Header() {
    return(
        <div>
            <header class="header">
                <nav class="navigation">
                    <ul>
                        <li><a href="/" title="Products" class="products"><b>Products</b></a></li>
                        <li><a href="/myCart" title="My Cart" class="myCart">My Cart</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}