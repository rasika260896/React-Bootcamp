import {Outlet} from 'react-router-dom'
import React, {Component} from "react";


class ProfileComponent extends Component{
  constructor(props){
    super(props);
    this.state ={
      userInfo:"Rasika"
    };
    console.log("Profile- constructor")
  } 
  
 async componentDidMount(){
    console.log("Profile -ComponentDidMount");
    const data = await fetch('https://api.github.com/users/rasika260896');
    const json = await data.json();
    //to set the data from api;
    this.setState({userInfo:json});

  }

  componentDidUpdate(){
    console.log("Profile-ComponentDidUpdate");
  }


  componentWillUnmount(){
    console.log("Profile-componentWillUnmount");
  }

  render(){
    console.log("Profile- render");
    const {name,login,avatar_url,location,company,public_repos} = this.state.userInfo;
    return(
    <>
    <img src={avatar_url} alt="user-img" />
    <h1>Name : {name}</h1>
    <p>LoginId : {login}</p>
    <p>Company : {company}</p>
    <p>Location: {location}</p>
    <Outlet />
    </>
    )

  }
}

export default ProfileComponent