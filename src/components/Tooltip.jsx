import React from "react";
import './my-styles.css';
export const Tooltip = (props) => {
    const { disable, hide } = props;
    const myclass = disable ? 'grayed-out' : 'mydiv';
    return (
        <div className={myclass}>
            {hide ? '' : <p>Hi this is simple text area where we need to grayed out and show based on the property</p>}
        </div>);
}