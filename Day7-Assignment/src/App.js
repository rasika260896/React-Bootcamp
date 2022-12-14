import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './Components/HeaderComponent.js'
import BodyComponent from './Components/BodyComponent.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ErrorComponent from './Components/ErrorComponent.js'
import AboutUs from './Components/AboutUs.js'
import MemberData from './Components/MemberData.js'

const App = () => {

    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
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
                errorElement: <ErrorComponent />
            },
            {
                path: "/search",
                element: <BodyComponent />,
                errorElement: <ErrorComponent />
            },
            {
                path: "/about-us",
                element: <AboutUs />,
                errorElement: <ErrorComponent />
            },

        ]

    },
   /*  {
        path: "/about-us",
        element: <AboutUs />,
        errorElement: <ErrorComponent />
    }, */

])



const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App/>);
root.render(<RouterProvider router={appRouter} />)