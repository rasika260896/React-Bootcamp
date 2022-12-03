import React from 'react';
import CardComponent from './CardComponent';
import data from '../data/data.js'

const BodyComponent = () =>{
   
    return data.map((item)=>(
        <CardComponent item={item}/>
       ))}

    

export default BodyComponent;