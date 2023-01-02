import {Link} from 'react-router-dom';
import {useContext} from 'react';
import ThemeContext  from './ThemeContext';

const HeaderComponent = () =>{
    const { theme, setTheme } = useContext(ThemeContext);
    return(
        <div id="header" style={{backgroundColor:theme==="light"?"#000":"#fff",color:theme==="light"?"#fff":"#000"}}>
        <h1>Insurgents</h1>
        <div className ="nav-links">
        <p><Link to ='/'> Home </Link></p>
        <p><Link to="/about-us">About Us</Link></p> 
        <p><Link to ='/search'>Search..</Link></p>
        <p><Link to ='/filter'>Filter</Link></p>
        <button id="btn-context" onClick={()=>setTheme(theme ==="dark"? "light" : "dark")}>Theme</button>
        </div>
        </div>
    )
}

export default HeaderComponent;