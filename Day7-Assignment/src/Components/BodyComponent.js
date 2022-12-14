import React from 'react';
import CardContainer from './CardContainer';
import {useState,useEffect} from 'react'
import SearchBar from './SearchBar';

const BodyComponent = () =>{
        //data is empty initially and as useEffect is applied we get the data and it is set to setUser.
       const [user,setUser] = useState([]);  
       const [filteredUser,setFilteredUser] = useState([]);
       const userList=[
           "rasika260896",
           "shreyagoyal30", 
           "akshaymarch7",
           "karanmehta",
           "ab-rai",
           "ankita1696"
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
           <SearchBar user={user} setFilteredUser={setFilteredUser}/>
           <div id="class-container">
           <CardContainer filteredUser={filteredUser.length ? filteredUser : user }/>
           </div>
           </div>
       )
}

export default BodyComponent;