import React from 'react'
import {useState} from 'react'

/**
	 * @description: function is called on Submit of the form, This function describes the functionality of Search
	 * @param1: searchText : entered search text
     * @param2: user:props passed to the function to provide user data
*/

const searchMemeber = (searchText,user) =>{
 return user.filter((item)=>{ return item?.name.toLowerCase().includes(searchText.toLowerCase())})
}

/**
	 * @description: SearchBar component consist of input element and its functioality
	 * @param1: user : user data
     * @param2: SetFilteredUser : this function sets the value of the filteredUser
*/

const SearchBar = ({user,setFilteredUser}) =>{
   const [searchText, setSearchText] = useState("");
   
   handleChangeText=(e)=>{
   setSearchText(e.target.value);
   }

    return(
        <div id="search">
        <form onSubmit={(e)=>{e.preventDefault();
         const filteredUser = searchMemeber(searchText,user);
         console.log(filteredUser);
         setFilteredUser(filteredUser);
        }
        }>
        <input type="text" id="search-bar" placeholder = "Search"  value={searchText} onChange={handleChangeText}/>
        </form>
        </div>
    )
}

export default SearchBar;