import React, { useState } from 'react';
import {TextField} from '@material-ui/core'

const InputMargin = {
    marginTop: 10,
    marginBottom: 20
}

const AddUserForm = props => {
    const initialFormState = { id: null, name: '', username: '' };
    const [ user, setUser ] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    return (
        <div style={{ paddingTop: 20, paddingBottom: 20, width: 300 }}>
            <form 
                onSubmit={ 
                    event => {
                        event.preventDefault();
                        if (!user.name || !user.username) return

                        props.addUser(user);
                        setUser(initialFormState);
                    } 
                } 
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                
                {/* <label>Name</label> */}
                <TextField label="name" name="name" value={user.name} onChange={handleInputChange} style={InputMargin} />
                
                {/* <label>Username</label> */}
                <TextField label="username" name="username" value={user.username} onChange={handleInputChange} style={InputMargin} />
                
                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUserForm;