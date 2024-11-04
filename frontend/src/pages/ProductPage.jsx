// src/components/ProductPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import items from "../data/items";
import LoginDialog from "../components/LoginDialog";

const ProductPage = () => {
    const { id } = useParams();
    const product = items.find((item) => item.id === parseInt(id));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    const handleBuyNow = () => {
        if (!isLoggedIn) setShowLoginDialog(true);
        else alert("Proceeding to checkout...");
    };

    const handleAddToCart = () => {
        if (!isLoggedIn) setShowLoginDialog(true);
        else alert("Added to cart!");
    };

    const handleLogin = (sessionId) => {
        setIsLoggedIn(true);
        // Optionally, store sessionId or other login details
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <div className="product-images">
                {product.images.map((img, index) => (
                    <img key={index} src={img} alt={`product ${index + 1}`} />
                ))}
            </div>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleBuyNow}>Buy Now</button>
            <button onClick={handleAddToCart}>Add to Cart</button>

            {showLoginDialog && <LoginDialog onClose={() => setShowLoginDialog(false)} onLogin={handleLogin} />}
        </div>
    );
};

export default ProductPage;
