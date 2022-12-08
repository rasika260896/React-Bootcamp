import React from 'react';
import CardComponent from './CardComponent';
import NoResultComponent from './NoResultComponent.js'

const BodyComponent = ({filteredUser}) =>{
  if(!filteredUser.length) return <NoResultComponent/>
  else{
    return filteredUser.map((item)=>(
        <CardComponent item={item}/>
       ))}

}

export default BodyComponent;