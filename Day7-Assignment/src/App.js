import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent.js'
import BodyComponent from './components/BodyComponent.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ErrorComponent from './components/ErrorComponent.js'
import AboutUs from './components/AboutUs.js'
import MemberData from './components/MemberData.js'

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

            },
            {
                path: "/search",
                element: <BodyComponent />,

            },
            {
                path: "/about-us",
                element: <AboutUs />,

            },

        ]

    },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)