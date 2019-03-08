import React from "react";
import {Tooltip} from "./Tooltip.jsx"

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      disable: false
    };
    this.handleCheck = (event) =>{
      event.persist();
      this.setState(() => ({
        disable: event.target.checked
      }));
    }
  }

  render(){
    const{disable} = this.state;
    console.log('disable', disable);
    const{handleCheck} = this;
    const checkboxProps = {
      type: 'checkbox',
      defaultChecked: disable,
      onClick: handleCheck
    };

    const toolTipProps = {
      hide: disable
    }

    return (<div>
      <div><h1>Home Component</h1></div>
      <Tooltip {...toolTipProps}/>
      <div><input {...checkboxProps}></input></div>
      </div>);
  }
}