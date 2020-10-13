import React, {useState} from 'react';
import GeneralDisplay from './GeneralDisplay';

const General = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const [props, setProps] = useState('')

    const [displayForm, setDisplayForm] = useState(false);
    const [displayInfo, setDisplayInfo] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setProps([name, email, phone]);
        setDisplayInfo(true);
    }

    const handleChange = event => {
        const {name, value} = event.target;
        if (name === 'name') {
            setName(value);
        };
        if (name === 'email') {
            setEmail(value);
        };
        if (name === 'phone') {
            setPhone(value);
        };
    }

    const handleClick = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <div>
            <h2>About Me:</h2>
            <div>{displayInfo ? <GeneralDisplay props={props}/> : null}</div>
            <button onClick={handleClick}>{displayForm ? 'Done' : 'Update'}</button>
            <div>
            {displayForm ?
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        name="name"
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleChange}
                        name="email"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={handleChange}
                        name="phone"
                    />
                    <button type="submit">Save</button>
                </form>
             : null}
            </div>
        </div>
    )
}

export default General;