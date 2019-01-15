import React, { useState, useEffect } from 'react';

const InputMargin = {
    marginTop: 10,
    marginBottom: 20
}

const EditUserForm = props => {
    const [ user, setUser ] = useState( props.currentUser );

    useEffect( 
        () => {
            setUser(props.currentUser)
        }, 
        [ props ]
    )

    const handleInputChange = event => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    };

    return (
        <div style={{ paddingTop: 20, paddingBottom: 20, width: 300 }}>
            <form
                onSubmit={ event => {
                    event.preventDefault();
                    props.updateUser( user.id, user );
                }}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <label>Name</label>
                <input type="text" name="name" value={ user.name } onChange={ handleInputChange } style={ InputMargin } />

                <label>Username</label>
                <input type="text" name="username" value={ user.username } onChange={ handleInputChange } style={ InputMargin } />

                <button>Update user</button>
                <button onClick={ () => props.setEditing( false )}>
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default EditUserForm;