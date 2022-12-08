import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './Components/HeaderComponent.js'
import BodyComponent from './Components/BodyComponent.js'
import {useState,useEffect} from 'react'

const App =()=>{
    //data is empty initially and as useEffect is applied we get the data and it is set to setUser.
    const [user,setUser] = useState([]);  
    const [filteredUser,setFilteredUser] = useState([]);
    const userList=[
        "rasika260896",
        "shreyagoyal30", 
        "akshaymarch7",
        "karanmehta",
    ]
    useEffect(()=>{
        userData();
    },[]);

 /*function to fetch github api */

    async function userData(){
        let response = await Promise.all(
           userList.map(async(item) => {
              const userInfo = await fetch(`https://api.github.com/users/${item}`);
              const jsonData = await userInfo.json();
              return jsonData;
            }))
            setUser(response);      
    }
    return(
        <div>
        <HeaderComponent user={user} setFilteredUser={setFilteredUser}/>
        <div id="class-container">
        <BodyComponent filteredUser={filteredUser.length ? filteredUser : user} />
        </div>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);