import { useRouteError } from "react-router-dom";
import Logo from "../assets/img/logo.png"

const Error = function(){

    const err = useRouteError();
    return (
        <div className="error">
            <div>
                <img src={Logo} alt="logo"></img>
                <h1>OOPS! Something went wrong</h1>
                <h2>{err.status+" : "+err.statusText}</h2>
            </div>
        </div>
    );
}

export default Error;