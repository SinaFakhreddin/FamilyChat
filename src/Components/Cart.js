import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, clearCart, hideCart, showCart } from "../Actions";
import CartBody from "./CartBody";
import TotalSumComponent from "./TotalSumComponent";
import { IoMdCart } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

class Cart extends Component {
  render() {
    let { cartStatus, totalSum, cartState, hideCart, showCart, clearCart } =
      this.props;
    console.log("totalSum==>", totalSum);

    return (
      <div className={`cart-wrapper ${cartStatus === true ? "cart-up" : ""}`}>
        <div className="icon-wrapper">
          {cartStatus ? (
            <IoIosArrowDropdownCircle
              className="drop-down-arrow"
              onClick={hideCart}
            />
          ) : (
            <IoMdCart className="cart-icon-box" onClick={showCart} />
          )}
        </div>
        {cartState.length ? (
          <div className="no-name">
            {cartState.map((item) => (
              <CartBody
                key={item.id}
                productImgSelected={item.image}
                productNameSelected={item.productprops.model}
                productBrand={item.productprops.brand}
                productBranch={item.productprops.branch}
                productcostSelected={item.cost}
                productquantitySelected={item.productQuantity}
              />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <em>Your Cart Is Empty Choose Some Product</em>
          </div>
        )}

        <div className="button-cart-wrapper">
          <span className="total-cart">
            <IoMdCart /> :${totalSum}
          </span>
          <button onClick={clearCart} className="button-cart">
            <em>Clear Cart</em>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartStatus: state.showCart,
    cartState: state.cartState,
    totalSum: state.TotalSum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(hideCart()),
    showCart: () => dispatch(showCart()),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
