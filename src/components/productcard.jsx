// write product card here
import React from "react";
import ViewProductButton from "../components/button"; // Import button component
import "./ProductCard.css"; // Import product card styling

const Productcard = () => {
  const productImage = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-airpods-4-202409?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1724144134014"; // Dummy image
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" />
      <h2>{productName}</h2>
      <p className="price">{productPrice}</p>
      <ViewProductButton /> {/* Using the button component */}
    </div>
  );
};

export default Productcard;