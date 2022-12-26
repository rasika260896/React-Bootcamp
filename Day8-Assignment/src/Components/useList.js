import {useEffect, useState} from 'react';
import stateData from '../utils/states.json'

const useList=(stateName)=>{
const [city,setCity] = useState([]);

useEffect(()=>{
    getCity();
    async function getCity(){
        const data = stateData[stateName];
        setCity(data);
    }
},[stateName])
 
return city;
};

export default useList;