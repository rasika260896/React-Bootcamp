import React from 'react';

 const CardComponent = ({item}) =>{
  
  const {name,avatar_url} = item;
    return(
        <div id="card">
        <img src={avatar_url} alt = "user-profile"/>
        <h2>Name:{name}</h2>
        
        </div>
    )
} 


export default CardComponent;