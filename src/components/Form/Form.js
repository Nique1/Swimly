import react from "react";
import {Component} from 'react'
import "./Container.css";
import "./Container.js";
import Container from "./Container.js";
class Form extends Component { //komponent klasowy
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
      return (
          
        <div className="root-container"> 
        <div className="box-controller">
        <div className="box-container">
            {/* komponent zagniezdzony */}
             <Container/> 
        </div>
        </div>
        </div>
      );
    }
  }
  export default Form;
  