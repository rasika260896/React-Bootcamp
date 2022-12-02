/* importing react as we removed CDN links from index.html */
import React from 'react'
import ReactDOM from 'react-dom/client'
import userIcon from  './images/user-icon.png'
import reactLogo from './images/React_logo.png'

/* Creating a nested header element using React.createElement */

const header = React.createElement("div",{className:"title"},[React.createElement("h1",{id:"heading"},"Namaste React Bootcamp"),React.createElement("h2",{},"from zero to hero"),React.createElement("h3",{},"in 3 months")]);

/*creating same header element using JSX */

const heading = (<div className="title">
<h1 id="heading">Namaste React Bootcamp</h1>
<h2>from zero to hero</h2>
<h3>in 3 months</h3>
</div>)

/*Creating a functional Component of heading and adding a TitleComponent(Composition of Component) inside HeaderComponent*/

const TitleComponent=()=><h1>Welcome</h1>

const HeaderComponent = () =>{
    return(
        <div>
        <TitleComponent/>
        <h1 id="heading">Namaste React Bootcamp</h1>
        <h2>from zero to hero</h2>
        <h3>in 3 months!!!</h3>
        </div>
    )
}



/*Creating a Navbar or HeaderComponent from scratch using Functional Component */

const NavbarComponent = ()=>{
    return(
      <div id="navbar">
      <img src={reactLogo} alt="React-logo" className="react-logo"/>
      <input type="text" placeholder="SearchField" />
      <img src={userIcon} alt="user-icon" className="user-icon"/>
      </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavbarComponent/>);