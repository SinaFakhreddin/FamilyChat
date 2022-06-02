



const Products = (state={},action)=>{


    switch (action.type) {
        case "GET_PRODUCTS":
            let X = action.products.reduce((obj , item)=>{
                    obj[item.id] =  item;  
                    return obj },{})     
        return {
            ...state ,
            ...X
        }

        case "ADD_TO_CART":
           let {id} = action.selectedProduct
           let selectedProductById = state[id]
            return{
                ...state ,
                [id]:{
                    ...selectedProductById,
                        quantity:selectedProductById.quantity - 1
                }

            }
           
            
        default:
            return state;
    }
}
export default Products;


