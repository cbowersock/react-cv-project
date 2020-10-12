import React, {useState}from 'react';
import WorkDisplay from './WorkDisplay';

const Work = () => {
    const [company, setCompany] = useState('');
    const [position, setPostiion] = useState('');
    const [tasks, setTasks] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [reason, setReason] = useState('');
    
    const [props, setProps] = useState('')

    const [displayForm, setDisplayForm] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setProps([company, position, tasks, start, end, reason]);
    }

    const handleChange = event => {
        const {name, value} = event.target;
        if (name === 'company') {
            setCompany(value);
        };
        if (name === 'position') {
            setPostiion(value);
        };
        if (name === 'tasks') {
            setTasks(value);
        };
        if (name === 'start') {
            setStart(value);
        };
        if (name === 'end') {
            setEnd(value);
        };
        if (name === 'reason') {
            setReason(value);
        };
    }

    const handleClick = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <div>
            <WorkDisplay props={props}/>
            <button onClick={handleClick}>{displayForm ? 'Done' : 'Update'}</button>
            <div>
            {displayForm ?
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Company"
                        value={company}
                        onChange={handleChange}
                        name="company"
                    />
                    <input
                        type="text"
                        placeholder="Position"
                        value={position}
                        onChange={handleChange}
                        name="position"
                    />
                    <input
                        type="text"
                        placeholder="Responsibilities"
                        value={tasks}
                        onChange={handleChange}
                        name="tasks"
                    />
                    <input
                        type="text"
                        placeholder="Start Date"
                        value={start}
                        onChange={handleChange}
                        name="start"
                    />
                    <input
                        type="text"
                        placeholder="End Date"
                        value={end}
                        onChange={handleChange}
                        name="end"
                    />
                    <input
                        type="text"
                        placeholder="Reason for Leaving"
                        value={reason}
                        onChange={handleChange}
                        name="reason"
                    />
                    <button type="submit">Save</button>
                </form>
             : null}
            </div>
        </div>
    )
}

export default Work;