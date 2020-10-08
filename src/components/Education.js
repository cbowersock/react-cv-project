import React, {useState} from 'react';
import EducationDisplay from './EducationDisplay';

const Education = () => {
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [date, setDate] = useState('');

    const [displayForm, setDisplayForm] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
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
            <EducationDisplay school={school} major={major} date={date}/>
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