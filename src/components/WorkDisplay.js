import React from 'react';

const WorkDisplay = props => {
    return (
        <div>
            <h4>Company: {props.props[0]}</h4>
            <h4>Position: {props.props[1]}</h4>
            <h4>Responsibilities: {props.props[2]}</h4>
            <h4>Start Date: {props.props[3]}</h4>
            <h4>End Date: {props.props[4]}</h4>
            <h4>Reason for Leaving: {props.props[5]}</h4>
        </div>
    )
};

export default WorkDisplay;