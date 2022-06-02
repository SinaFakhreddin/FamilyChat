

export const getProductsFromReducer =(products)=>{
    return{
        type:"GET_PRODUCTS",
        products
    }
}
export const addToCart =(selectedProduct)=>{
    return{
        type:"ADD_TO_CART",
        selectedProduct
    }
}

export const showCart = () =>{
    return{
        type:"SHOW_CART",
    }

}
export const hideCart = () =>{
    return{
        type:"HIDE_CART",
    }

}

export const clearCart = ()=>{
    return{
        type:"CLEAR_CART",
        
    }

}

