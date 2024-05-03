import { useDispatch, useSelector } from "react-redux";
import Noitem from "./Noitem";
import MenuCart from "./MenuCart.js";
import { clearCart } from "../utils/cartSlice.js";
import { UseDispatch } from "react-redux";

const Cart = () => {

 const dispatch  = useDispatch();

 const clearCartItems = ()=>{
    dispatch(clearCart());
 }
 
 const items = useSelector(store => store.cart.items);
  return (
    <div className="cart-page">
        {items.length === 0? <Noitem className="no-item"/> : (
            <div className="menu-center">
                <div className="i">
                <h1>Card Items : {items.length}</h1>
                <button onClick={()=>{
                  clearCartItems()
                }} className="clear-cart">Clear cart</button>
                </div>
                
            {   
                items.map((item,index) => (
                    <MenuCart key={index} item={item}/>
                ))
            }
        </div>
        )}
    </div>
  );
}

export default Cart;