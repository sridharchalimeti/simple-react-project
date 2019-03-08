import React from "react";
import './my-styles.css';
export const Tooltip = (props)=>{
    const {hide} = props;
    const myclass = hide?'grayed-out':'mydiv';
    return(
    <div className={myclass}>
        <p>Hi this is simple text area where we need to grayed out and show based on the property</p>    
    </div>);
}