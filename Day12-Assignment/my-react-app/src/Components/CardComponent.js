import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import ThemeContext  from './ThemeContext';

 const CardComponent = ({item}) =>{

 const {theme} = useContext(ThemeContext);   
  const {name,avatar_url,followers,public_repos,company} = item;
    return(
        <div id="card" style={{backgroundColor : theme === "light" ? "#fff" : "#000",color:theme === "light" ? "#000" :"#fff" }}>
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