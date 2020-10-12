import React from 'react';

const EducationDisplay = props => {
    return (
        <div>
            <h4>School: {props.props[0]}</h4>
            <h4>Major: {props.props[1]}</h4>
            <h4>Graduation Date: {props.props[2]}</h4>
        </div>
    );
};

export default EducationDisplay;