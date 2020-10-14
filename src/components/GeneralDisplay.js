import React from 'react';

const GeneralDisplay = props => {
    return (
        <div className="display">
            <h4>Name: {props.props[0]}</h4>
            <h4>Email Address: {props.props[1]}</h4>
            <h4>Phone Number: {props.props[2]}</h4>
        </div>
    );
};

export default GeneralDisplay;