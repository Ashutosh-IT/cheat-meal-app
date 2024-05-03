import { IMG_URL } from "../Constants";
import { UseDispatch, useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const MenuCart = (props) => {

    const dispatch = useDispatch(); 

    const removeFoodItem = (item) => {
        dispatch(removeItem(item));
    }

    console.log(props.item);
    
    return (
        <div className="menu-card">
            <div className="menu-card-left">
                <h3>{props.item.name}</h3>
                <p>Price : Rs. {props.item.price / 100.00}</p>
                <p>{props.item.description}</p>
            </div>
            <div className="menu-card-right">
                <img src={(props.item.imageId) ? IMG_URL+props.item.imageId : "https://storage.googleapis.com/belinni.com.co/images/no-image-available-vector-illustration-260nw-744886198-9.jpg"}></img>
                <button onClick={() => removeFoodItem(props.item)} className="remove">REMOVE</button>
            </div>
        </div>
    );
}

export default MenuCart;