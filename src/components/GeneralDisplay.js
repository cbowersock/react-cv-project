import React from 'react';

const GeneralDisplay = props => {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <h4>Email Address: {props.email}</h4>
            <h4>Phone Number: {props.phone}</h4>
        </div>
    );
};

export default GeneralDisplay;