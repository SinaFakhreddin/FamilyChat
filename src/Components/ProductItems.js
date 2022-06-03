import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Actions";

export default class ProductItems extends Component {
  render() {
    let {
      imageIcon,
      productDescription,
      productName,
      productCost,
      quantity,
      onAddToCart,
      exitMouse,
    } = this.props;
    return (
      <div
        className={`product-wrapper ${quantity > 0 ? "" : "disabled-class"}`}
        onMouseLeave={exitMouse}
      >
        <div className="image-icon-wrapper">
          changes is commited
          <img src={imageIcon} alt="" />
        </div>
        <div className="name-description-wrapper">
          <em>{productName}</em>
          <p>{productDescription}</p>
        </div>
        <div className="cost-wrapper">
          <em>
            Cost: <span>$ {productCost}</span>
          </em>
          <em>
            Quantity: <span> {quantity}</span>
          </em>
        </div>
        <div className="buy-button-wrapper">
          <button
            disabled={quantity > 0 ? "" : "disable"}
            onClick={onAddToCart}
          >
            {quantity > 0 ? "Buy" : "Soldout"}
          </button>
        </div>
      </div>
    );
  }
}
