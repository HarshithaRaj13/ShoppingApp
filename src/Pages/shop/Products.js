import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

export const Products = (props) => {
  const { id, productName, productImage, price } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={Image.caption} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs.{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>{cartItemAmount}</>}
      </button>
      {/* <button className="addToWishlist"> Add to list </button> */}
    </div>
  );
};
