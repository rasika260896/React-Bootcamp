import React, { lazy,Suspense,useState } from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ErrorComponent from './components/ErrorComponent.js'
import AboutUs from './components/AboutUs.js'
import MemberData from './components/MemberData.js'
import ProfileComponent from './components/ProfileComponent.js'
import NestedProfileComponent from './components/NestedProfileComponent.js'
import FilterComponent from './components/FilterComponent.js'
const BodyComponent=lazy(()=>import("./components/BodyComponent.js"))
import ThemeContext from './components/ThemeContext.js'
import "./style.css";


const App = () => {
const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value = {{theme:theme,setTheme:setTheme}}>
            <HeaderComponent />
            <Outlet />
       </ThemeContext.Provider>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/member/:username",
                element: <MemberData />,

            },
            {
                path: "/search",
              
                element: <Suspense fallback={<h1>Loading...</h1>}><BodyComponent /></Suspense>,
              
              /*    children:[
                    {
                        path:"filter",
                        element:<FilterComponent />
                    }
                ]  */

            },
             {
              path:"/filter",
              element:<FilterComponent />
            }, 
            {
                path: "/about-us",
                element: <AboutUs />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileComponent name="Rasika from NRB" />,
                        children: [
                            {
                                path: "nested-profile",
                                element: <NestedProfileComponent />
                            }
                        ]
                    }

                ]

            },

        ]

    },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)