import React from 'react';
import { Link } from "react-router-dom"

 const CardComponent = ({item}) =>{
    if(!item) return null; 
    console.log(item); 
  const {name,avatar_url,followers,public_repos,company} = item;
    return(
        <div id="card">
        <Link to={`/member/${item?.login}`}>
        <img src={avatar_url} alt = "user-profile"/>
        </Link>
        <p>Name:{name}</p>
        <p>Followers:{followers}</p>
        <p>Public Repos:{public_repos}</p>
        <p>Company:{company}</p>
        </div>
    )
} 


export default CardComponent;