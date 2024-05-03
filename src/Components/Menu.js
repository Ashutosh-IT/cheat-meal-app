import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import { MENU_URL } from "../Constants";
import MenuCard from "./MenuCard.js";
import ShimmerMenu from "./ShimmerMenu.js";

const Menu = function(){
    const {id} = useParams();

    const [resMenu, setResMenu] = useState([]);
    const [res, setRes] = useState(null);

    useEffect(function(){
        getRestaurantMenuInfo();
    },[]);


    async function getRestaurantMenuInfo(){
        const data = await fetch(MENU_URL+id);
        const json = await data.json();
        setResMenu((json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ? (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) : (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards));
        setRes(json?.data?.cards[2]?.card?.card?.info);
    }

    return !res  ? <ShimmerMenu /> : (
        <div className="menu">
            <div className="menu-header">
                <div className="header-left">
                    <div>
                        <img src={IMG_URL+res.cloudinaryImageId}></img>
                    </div>
                    <div>
                        <h1>{res.name}</h1>
                        <p>{res.cuisines.join(", ")}</p>
                        <p>Location : {res.locality}</p>
                    </div>
                </div>
                <div className="header-right">
                    <div>
                        <h2>Rating :</h2>
                        <h3>{res.avgRating}</h3>
                    </div>
                </div>
            </div>
            <div className="menu-center">
                {
                    resMenu.map((item,index) => (
                        <MenuCard key={index} item={item}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Menu;