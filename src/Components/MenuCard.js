import { useDispatch } from "react-redux";
import { IMG_URL } from "../Constants";
import {addItem} from "../utils/cartSlice.js"

const MenuCard = (props)=> {

    const dispatch = useDispatch();

    const addFoodItem =(item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="menu-card">
            <div className="menu-card-left">
                <h3>{props.item.card.info.name}</h3>
                <p>Price : Rs. {props.item.card.info.price / 100.00}</p>
                <p>{props.item.card.info.description}</p>
            </div>
            <div className="menu-card-right">
                <img src={(props.item.card.info.imageId) ? IMG_URL+props.item.card.info.imageId : "https://storage.googleapis.com/belinni.com.co/images/no-image-available-vector-illustration-260nw-744886198-9.jpg"}></img>
                <button onClick={()=>addFoodItem(props.item.card.info)}>ADD</button>
            </div>
        </div>
    );
}

export default MenuCard;