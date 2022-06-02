
const initialState =0

const TotalSum = (state = initialState,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return state += (action.selectedProduct.cost)*(action.selectedProduct.productQuantity);

        case "CLEAR_CART":
           return state = 0;
        default:
            return state
    }
}

export default TotalSum;