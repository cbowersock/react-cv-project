import React, {useState} from 'react';
import EducationDisplay from './EducationDisplay';

const Education = () => {
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [date, setDate] = useState('');

    const [props, setProps] = useState('')

    const [displayForm, setDisplayForm] = useState(false);
    const [displayInfo, setDisplayInfo] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setProps([school, major, date]);
        setDisplayInfo(true);
    }

    const handleChange = event => {
        const {name, value} = event.target;
        if (name === 'school') {
            setSchool(value);
        };
        if (name === 'major') {
            setMajor(value);
        };
        if (name === 'date') {
            setDate(value);
        };
    }

    const handleClick = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <div>
        <h2>Education</h2>
            <div>{displayInfo ? <EducationDisplay props={props}/> : null}</div>
            <button onClick={handleClick}>{displayForm ? 'Done' : 'Update'}</button>
            <div>
            {displayForm ?
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="School"
                        value={school}
                        onChange={handleChange}
                        name="school"
                    />
                    <input
                        type="text"
                        placeholder="Major"
                        value={major}
                        onChange={handleChange}
                        name="major"
                    />
                    <input
                        type="text"
                        placeholder="Graduation Date"
                        value={date}
                        onChange={handleChange}
                        name="date"
                    />
                    <button type="submit">Save</button>
                </form>
             : null}
            </div>
        </div>
    )
}

export default Education;