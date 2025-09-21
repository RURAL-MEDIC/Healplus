import React, { useState } from "react";
import "./MedicineDetail.css"; // We'll keep your CSS in a separate file or use inline styles

const MedicineDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="container">
      <div
        className="product-img"
        style={{
          background: "#ad4040 url('https://via.placeholder.com/420x220') center/cover no-repeat",
        }}
      ></div>

      <div className="quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <div className="details">
        <h2>MKB A29</h2>
        <p className="info">Compound: Paracetamol</p>
        <p className="info">Company: Medilife</p>
        <p className="info">Expiry: Dec 2026</p>
        <p className="info">In Stock: Yes</p>
        <p className="info">Size: 10g box</p>
        <p className="price">₹120</p>

        <button className="add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>

        <div className="description">
          <h3>Product highlights</h3>
          <ul>
            <li>Has 11+ essential vitamins and minerals</li>
            <li>The goodness of calcium, iron, zinc, and selenium in one capsule</li>
            <li>Prevents follicle shrinkage and hairfall</li>
            <li>Gluten-free, soy-free, non-GMO, with no artificial sweeten.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetail;
