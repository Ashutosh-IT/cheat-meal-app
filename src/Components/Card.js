import {IMG_URL} from "../Constants";
import { Link } from "react-router-dom";

const Card = function(props){
    return (
        <Link to={"/restaurant/"+props.item.info.id} className="card">
            <div className="card-img">
                <img src={IMG_URL+props.item.info.cloudinaryImageId} alt="dish"></img>
            </div>
            <div className="card-body">
                <h3>{props.item.info.name}</h3>
                <h4>{props.item.info.cuisines.join(", ")}</h4>
                <h5>{props.item.info.sla.deliveryTime} mins</h5>
            </div>
        </Link>
    );
};

export default Card;