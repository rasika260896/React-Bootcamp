import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from './userSlice.js';

const HeaderComponent = () => {
   /*  useSelector has access to entire store */
    const userInfo = useSelector((store) =>store.user.value);
    console.log(userInfo)
    
    const dispatch = useDispatch();
    const logoutUser = () => {
        dispatch(logout({}))
    }

    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div id="header" style={{ backgroundColor: theme === "light" ? "#000" : "#fff", color: theme === "light" ? "#fff" : "#000" }}>
            <h1 data-testid="logo">Insurgents</h1>
            <div className="nav-links">
                <p><Link to="/about-us">About Us</Link></p>
                <p><Link to='/search'>Search</Link></p>
                <p><Link to='/filter'>Filter</Link></p>
                { userInfo.name ? (<><p>Hi, {userInfo.name}</p><Link to='/login' onClick={logoutUser}>Logout</Link></>) :(<p><Link to='/login'>Login</Link></p>)} 
                <button id="btn-context" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Theme</button>
            </div>
        </div>
    )
}

export default HeaderComponent;