import React from "react";

const CartComponent = () => {
  return (
    <div className="bot" id="basket">
      <a href="/cart">
        <i className="fa-solid fa-basket-shopping"></i>
        {localStorage.getItem("addedToCart") === "added" && (
          <p className="num"></p>
        )}
      </a>
    </div>
  );
};

export default CartComponent;
