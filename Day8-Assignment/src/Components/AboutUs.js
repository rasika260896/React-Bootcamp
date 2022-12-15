import { Outlet } from "react-router-dom";
import React ,{Component} from "react";


class AboutUs extends Component {
    constructor(props){
        super(props);
        console.log("About-constructor")
    }
    render() {
        console.log("About-render")
        return (
            <div id="about-us">
                <h1>Welcome to our Team...</h1>
                <p>We are team of 10 members working in different domains, and We are here to learn React from scratch.</p>
                <Outlet />
            </div>
        )
    }
}

export default AboutUs;