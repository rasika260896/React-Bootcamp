import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './Components/HeaderComponent.js'
import BodyComponent from './Components/BodyComponent.js'

const App =()=>{
    return(
        <div>
        <HeaderComponent/>
        <div id="class-container">
        <BodyComponent />
        </div>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);