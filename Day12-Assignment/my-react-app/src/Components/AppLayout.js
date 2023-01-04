import React, { useState } from 'react'

import HeaderComponent from './HeaderComponent.js'
import { Outlet } from "react-router-dom"
/* import ErrorComponent from './Components/ErrorComponent.js'
import AboutUs from './Components/AboutUs.js'
import MemberData from './Components/MemberData.js'
import ProfileComponent from './Components/ProfileComponent.js'
import NestedProfileComponent from './Components/NestedProfileComponent.js'
import FilterComponent from './Components/FilterComponent.js'  */
import ThemeContext from './ThemeContext.js'
//const BodyComponent=lazy(()=>import("./Components/BodyComponent.js"))


const AppLayout = () => {
const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value = {{theme:theme,setTheme:setTheme}}>
            <HeaderComponent />
            <Outlet />
       </ThemeContext.Provider>
    )

}



export default AppLayout;
