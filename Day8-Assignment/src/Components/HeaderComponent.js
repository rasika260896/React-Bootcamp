import {Link} from 'react-router-dom';


const HeaderComponent = () =>{
    return(
        <div id="header">
        <h1>Insurgents</h1>
        <div className ="nav-links">
        <p><Link to ='/'> Home </Link></p>
        <p><Link to="/about-us">About Us</Link></p> 
        <p><Link to ='/search'>Search</Link></p>
        </div>
        </div>
    )
}

export default HeaderComponent;