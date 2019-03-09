import React from "react";
import { Tooltip } from "./Tooltip";
import { ChildInput } from "./ChildInput";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      hide: false
    };
    this.handleCheck = (event) => {
      event.persist();
      this.setState(() => ({
        disable: event.target.checked
      }));
    }

    this.handleChildReaction = (checked) => {
      this.setState(() => ({
        hide: checked
      }))
    }
  }

  render() {
    const { disable, hide } = this.state;
    console.log('disable', disable);
    const { handleCheck, handleChildReaction } = this;
    const checkboxProps = {
      type: 'checkbox',
      defaultChecked: disable,
      onClick: handleCheck
    };

    const toolTipProps = {
      disable, hide
    }

    const childInputProps = {};
    childInputProps.handleChildReaction = handleChildReaction.bind(this);

    return (<div>
      <div><h1>Home Component</h1></div>
      <Tooltip {...toolTipProps} />
      <div>Disable Background: <input {...checkboxProps}></input></div>
      <ChildInput {...childInputProps} />
    </div>);
  }
}