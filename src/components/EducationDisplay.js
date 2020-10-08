import React from 'react';

const EducationDisplay = props => {
    return (
        <div>
            <h4>School: {props.school}</h4>
            <h4>Major: {props.major}</h4>
            <h4>Graduation Date: {props.date}</h4>
        </div>
    );
};

export default EducationDisplay;