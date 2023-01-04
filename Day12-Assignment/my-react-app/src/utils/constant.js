import React, { lazy,Suspense} from 'react'
import { createBrowserRouter} from "react-router-dom"
import AppLayout from '../Components/AppLayout.js'
import ErrorComponent from '../Components/ErrorComponent.js'
import AboutUs from '../Components/AboutUs.js'
import MemberData from '../Components/MemberData.js'
import ProfileComponent from '../Components/ProfileComponent.js'
import NestedProfileComponent from '../Components/NestedProfileComponent.js'
import FilterComponent from '../Components/FilterComponent.js'
const BodyComponent=lazy(()=>import("../Components/BodyComponent.js"))

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/member/:username",
                element: <MemberData />,

            },
            {
                path: "/search",
              
                element: <Suspense fallback={<h1>Loading...</h1>}><BodyComponent /></Suspense>,
              

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
