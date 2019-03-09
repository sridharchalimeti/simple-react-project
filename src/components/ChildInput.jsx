import React from 'react';
export class ChildInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleCheck = (event) => {
            event.persist();
            const { checked } = event.target;
            this.setState(() => ({ checked }));
            props.handleChildReaction(checked);
        }
    }

    render() {
        const { checked } = this.state;
        const { handleCheck } = this;
        const inputProps = {
            type: 'checkbox',
            onClick: handleCheck,
            defaultChecked: checked
        };

        return (
            <div>
                Hide: <input {...inputProps}></input>
            </div>
        );
    }
}