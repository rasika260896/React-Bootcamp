import React, { Component } from 'react'

class NestedProfileComponent extends Component {
    constructor(props) {
        super(props);
        console.log("NestedProfile -constructor")
    }

    componentDidMount() {
        console.log("NestedProfile -ComponentDidMount")
    }
    
    componentDidUpdate(){
        console.log("Nested-ComponentDidUpdate");
      }
    render() {
        console.log("NestedProfile - render");
       
        return <p>NestedProfileComponent</p>
    }
}

export default NestedProfileComponent