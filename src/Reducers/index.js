import { combineReducers } from "redux";
import Products from "./MyProducts";
import showCart from "./Cart";
import cartState from "./SelectedCart"
import TotalSum from "./totalSum";


export default combineReducers({
    Products ,
    showCart,
    cartState,
    TotalSum
})