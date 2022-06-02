import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, hideCart, showCart } from '../Actions';
import ProductItems from './ProductItems';

 class Products extends Component {
  render() {
    let {myProducts,addToCartFunc, showCartFunction,hideCartFunction}=this.props
    return(
         <div className='fucking-parrent'>
            { 
              myProducts.map((item)=>

              <ProductItems
               key={item.id} 
               imageIcon={item.image} 
               productName={item.productprops.model} 
               productDescription={item.description} 
               productCost={item.cost} 
               quantity={item.quantity} 
              // exitMouse={()=>hideCartFunction()}
              onAddToCart={()=>
                {addToCartFunc(item)
                  showCartFunction()
                }}/>
              )
            }
         </div>
         );
  }
}


const myProductsToArray = products => Object.keys(products).map((id)=>products[id])



const mapStateToProps =(state)=>{
  return{
    myProducts:myProductsToArray( state.Products),
    cartStatus:state.showCart
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addToCartFunc :(product)=>dispatch(addToCart(product)),
    showCartFunction:()=>dispatch(showCart()),
    hideCartFunction:()=>dispatch(hideCart())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)