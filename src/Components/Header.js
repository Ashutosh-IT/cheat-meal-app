import logo from "../assets/img/logo.png"
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = function(){

    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo"></img></Link>
                <h2>Cheat Meal</h2>
            </div>
            <ul className="header-list">
                <li className="list-items"><Link to="/about">About</Link></li>
                <li className="list-items">Contact</li>
                <li className="list-items">Sign In</li>
                <li className="list-items"><Link to="/cart" className="flex"><span>Cart</span> <span className="cart-number">{cartItems.length}</span></Link></li>
            </ul>
        </div>
    );
};


export default Header;