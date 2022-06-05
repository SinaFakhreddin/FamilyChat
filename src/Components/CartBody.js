import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

class CartBody extends Component {
  render() {
    let {
      productImgSelected,
      productNameSelected,
      productcostSelected,
      productquantitySelected,
      productBrand,
      productBranch,
      MyCartInfo,
    } = this.props;

    return (
      <div className="cart-body">
        <div className="cart-info-img">
          <img src={productImgSelected} style={{ height: "40px" }} alt="" />
          <div>
            <ul>
              <li>test</li>
              <li>test2</li>
              <li>test3</li>
              <li>test4</li>
            </ul>
          </div>
          <div>Add Changes To be Commited</div>
        </div>
        <div className="info-product-selected">
          <span>{productNameSelected || productBrand || productBranch}</span>
          <em>${productcostSelected}</em>
          <em>{productquantitySelected}</em>
          <em>${`${productcostSelected * productquantitySelected}`}</em>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    MyCartInfo: state.cartState,
  };
};

export default connect(mapStateToProps)(CartBody);
