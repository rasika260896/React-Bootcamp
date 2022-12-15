import React, {Component} from "react";

class ProfileComponent extends Component{
  constructor(props){
    super(props);
    this.state ={
      email:"rasikadharangaonkar@gmail.com"
    };
    console.log("Profile- constructor")
  }  
  render(){
    console.log("Profile- render");
    return(
    <>
    <h1>My Name : {this.props.name}</h1>
    <p>Email : {this.state.email}</p>
    </>
    )

  }
}

export default ProfileComponent