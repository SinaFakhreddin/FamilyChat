import React, { Component } from 'react'
import { connect } from 'react-redux'

class TotalSumComponent extends Component {


   
  render() {
      let {cartState}=this.props
      cartState.map((item)=>console.log("cart State iten==>",item))
    return (
        <div className="button-cart-wrapper">
        <span className="total-cart">Sum :$ </span>
        <button className="button-cart">
          <em>Clear Cart</em>
        </button>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
    console.log("state in total",state)
    return{
        cartState:state.cartState
    }
}

export default connect(mapStateToProps)(TotalSumComponent)

