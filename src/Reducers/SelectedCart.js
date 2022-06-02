


const initialState =[]

const cartState =(state=initialState , action)=>{


    switch (action.type) {

            case "CLEAR_CART":
            
            return state=[]

            case "ADD_TO_CART":
            console.log("selectedProduct=>",action.selectedProduct)
            let productQuantity = 1
            let isExistedProduct =state.some((item)=>item.id===action.selectedProduct.id )
            let newSelectedProduct=  Object.assign(action.selectedProduct,{productQuantity:productQuantity})
            let sum = 0
            newSelectedProduct['quantity'] -=1
            console.log("selectedProduct=>",newSelectedProduct)
            if (state.length===0) {
            state.push(newSelectedProduct)
            // sum+=newSelectedProduct.cost
            }else 
            if (state.length>0&&!isExistedProduct) {
            state.push(newSelectedProduct) 
            // sum+=newSelectedProduct.cost
            } else
            if (state.length>0&&isExistedProduct) {
                let itemTekrari= state.find((item)=>item.id===action.selectedProduct.id)
                itemTekrari.productQuantity+=1
                itemTekrari['quantity'] -=1
                // sum+=itemTekrari.cost
            }
        
        default:
            return state;
    }


}

export default cartState;


// if (state.length===0) {
//     state.push(newSelectedProduct)
//     sum+=newSelectedProduct.cost
// }else 
// if (state.length>0&&!isExistedProduct) {
//    state.push(newSelectedProduct) 
//    sum+=newSelectedProduct.cost
// } else
//    if (state.length>0&&isExistedProduct) {
//        let itemTekrari= state.find((item)=>item.id===action.selectedProduct.id)
//        itemTekrari.productQuantity+=1
//        itemTekrari['quantity'] -=1
//        sum+=itemTekrari.cost
//    }
//    console.log("sum==>",sum)
