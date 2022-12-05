import React from 'react';
import SearchBar from './SearchBar';

const HeaderComponent = ({setFilteredMember}) =>{
    return(
        <div id="header">
        <h1>Insurgents</h1>
        <SearchBar setFilteredMember={setFilteredMember}/>
        </div>
    )
}

export default HeaderComponent;