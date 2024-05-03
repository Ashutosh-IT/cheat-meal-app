import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import Menu from "./Components/Menu.js";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./Components/Cart.js";

const Layout = () => {
    return (
    <>
     <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
     </Provider>
    </> 
    );
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/restaurant/:id',
                element:<Menu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }

        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
