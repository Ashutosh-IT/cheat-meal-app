import Card from "./Card.js";
import Shimmer from "./Shimmer.js";
import NotFound from "./NotFound.js";
import { filterData } from "../utils/helper.js";
import {useState, useEffect} from "react";

const Body = function(){

    const [text,setText] = useState("");
    const [restaurants,setRestaurants] = useState([]);
    const [allrestaurants,setallRestaurants] = useState([]);
    

    useEffect(function(){
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setallRestaurants(json?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
    <>
        <div className="search">

            <input type="text" placeholder="Search" value={text} onChange={(e)=>{
                setText(e.target.value);
                const data = filterData(e.target.value,allrestaurants);
                setRestaurants(data);
            }}></input>

            <button className="btn" onClick={()=>{
                const data = filterData(text,allrestaurants);
                setRestaurants(data);
            }}>Search</button>

        </div>
        <div className="center">

            { 
            (allrestaurants.length == 0) ? <Shimmer /> : (restaurants.length == 0)? <NotFound/> :
            restaurants.map((item,index) => (
                <Card key={index} item={item}/>
            ))
            }
        </div>
    </>
    );
};

export default Body;