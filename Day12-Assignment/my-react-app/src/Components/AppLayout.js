import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent.js'
import { Outlet } from "react-router-dom"
import ThemeContext from './ThemeContext.js'
import {Provider} from 'react-redux'
import store from './store.js'


const AppLayout = () => {
const [theme, setTheme] = useState("light");
    return (
        <Provider store = {store} >
        <ThemeContext.Provider value = {{theme:theme,setTheme:setTheme}}>
            <HeaderComponent />
            <Outlet />
        </ThemeContext.Provider>
        </Provider>
    )

}



export default AppLayout;
