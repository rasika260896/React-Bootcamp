import React from 'react';
import SearchBar from './SearchBar';

const HeaderComponent = ({user,setFilteredUser}) =>{
    return(
        <div id="header">
        <h1>Insurgents</h1>
        <SearchBar user={user} setFilteredUser={setFilteredUser}/>
        </div>
    )
}

export default HeaderComponent;