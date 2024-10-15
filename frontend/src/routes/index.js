import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AllUser from "../pages/AllUser";
import DashboardUser from "../pages/DashboardUser";
import Passwordreset from "../pages/Passwordreset";




const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children : [

            {
                path: "",
                element: <Home/>
            },
            {
                path: "SignUp",
                element: <SignUp/>
            },
            {
                path: "Login",
                element: <Login/>
            },
            {
                path: "alluser",
                element: <AllUser/>
            },
            {
                path: "dashboarduser",
                element: <DashboardUser/>
            },
            {
                path: "forgot-password",
                element: <Passwordreset/>
            },
          
            
        ]
    },
    
])


export default router

