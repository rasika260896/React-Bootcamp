import React from 'react';

 const CardComponent = ({item}) =>{
  
  const {name,companyOrCollege,experienceOrSemester,location,img} = item;
    return(
        <div id="card">
        <img src={img} alt = "user-profile"/>
        <h2>Name:{name}</h2>
        <h3>Place:{location}</h3>
        <h3>Company:{companyOrCollege}</h3>
        <h4>Experience:{experienceOrSemester}</h4>
        </div>
    )
} 


export default CardComponent;