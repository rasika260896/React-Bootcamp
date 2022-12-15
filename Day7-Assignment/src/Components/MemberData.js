import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import CardComponent from './CardComponent';
const MemberData =()=>{
const { username } = useParams(); 
const [userInfo, setUserInfo] = useState([]);
useEffect(()=>{
fetchData();
},[])   


async function fetchData(){
    const data = await fetch(`https://api.github.com/users/${username}`);
    const jsonData =  await data.json();
    /* Setting the data from api to local variable userInfo using setUserInfo function */
    setUserInfo(jsonData);
}
return(
    /* Sending data to CardComponent that is set to userInfo */
    <CardComponent item = {userInfo} />   
)
}

export default MemberData