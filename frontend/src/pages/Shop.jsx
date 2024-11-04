// src/components/Shop.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import items from "../data/items";
import "./Shop.css"; // Make sure you have the CSS file for styling

const Shop = () => {
    // Toggle this to `true` for local development to hide the cover
    const [isDevelopment, setIsDevelopment] = useState(false);

    return (
        <div className="shop">
            {/* Conditional overlay - shows cover if not in development mode */}
            {!isDevelopment && (
                <div className="shop-cover">
                    <div className="shop-cover-text">
                        <h2>Welcome to the DW Shop</h2>
                        <p>We’re working hard to bring you something amazing. Stay tuned!</p>
                    </div>
                    <div className="navigation-buttons">
                      <Link to="/" className="btn-left">
                        <span className="symbols">←</span> Home
                      </Link>
                    </div>
                </div>
            )}

            {/* Shop Content */}
            <div className={`shop-content ${!isDevelopment ? "blurred" : ""}`}>
                <h1>Shop</h1>
                <div className="product-grid">
                    {items.map((item) => (
                        <div key={item.id} className="product-card">
                            <Link to={`/product/${item.id}`} target="_blank">
                                <img src={item.images[0]} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
