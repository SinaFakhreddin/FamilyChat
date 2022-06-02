import React, { Component } from "react";
import Products from "./Products";
import "./../Styles/ProductItems.css";
import shop from "../Api/shop";
import { connect } from "react-redux";
import { getProductsFromReducer } from "../Actions";
import Cart from "./Cart";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdCart } from "react-icons/io";


class App extends Component {
  componentDidMount() {
    shop.getProductsFromApi((products) => this.props.getProducts(products));
  }


  render() {
    let {cartStatus} = this.props


    return (
      <div className="App">
        TEST
        <Products />  
        <Cart/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (products) => dispatch(getProductsFromReducer(products)),
  };
};

const mapStateToProps =(state)=>{
  return{
    cartStatus:state.cartStatus
  }
}



export default connect( mapStateToProps,mapDispatchToProps)(App);
