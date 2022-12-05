import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './Components/HeaderComponent.js'
import BodyComponent from './Components/BodyComponent.js'
import {useState} from 'react';
import data from './data/data.js'

const App =()=>{
    const [filteredMember,setFilteredMember] = useState(data);
    return(
        <div>
        <HeaderComponent setFilteredMember={setFilteredMember}/>
        <div id="class-container">
        <BodyComponent filteredMember={filteredMember}/>
        </div>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);