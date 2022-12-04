import React from 'react'
import {useState} from 'react'
import data from '../data/data.js'

const searchMemeber = (searchText) =>{
    /*to search member */
 return data.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))
}

const SearchBar = ({setFilteredMember}) =>{
   const [searchText, setSearchText] = useState("");
   
   handleChangeText=(e)=>{
   setSearchText(e.target.value);
   }

    return(
        <div id="search">
        <form onSubmit={(e)=>{e.preventDefault();
         const filteredMember = searchMemeber(searchText);
         console.log(filteredMember);
         setFilteredMember(filteredMember);
        }
        }>
        <input type="text" id="search-bar" placeholder = "Search"  value={searchText} onChange={handleChangeText}/>
        </form>
        </div>
    )
}

export default SearchBar;