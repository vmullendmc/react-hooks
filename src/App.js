import React, { useState } from 'react';
import UserTable from './tables/userTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import { CssBaseline, Grid } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' }
  ];

  const initialFormState = { id: null, name: '', username: '' };

  // Setting state
  const [ users, setUsers ] = useState( usersData );
  const [ currentUser, setCurrentUser ] = useState( initialFormState );
  const [ editing, setEditing ] = useState( false );

  
  
  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([ ...users, user ]);
  };

  const deleteUser = id => {
    setEditing( false );
    setUsers( users.filter( user => user.id !== id ) );
  }

  const updateUser = ( id, updatedUser ) => {
    setEditing( false );
    setUsers( users.map( user => ( user.id === id ? updatedUser : user )));
  }
  
  const editRow = user => {
    setEditing( true );
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <Grid container spacing={ 0 } style={{ padding: 20 }}>
        <Grid item xs={ 12 }>
          <h1 style={{ margin: 0 }}>
            Testing
          </h1>
        </Grid>
        <Grid item xs={ 12 }>
          <p>
            Crud App with hooks.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={ 8 } style={{ padding: 20 }}>
        <Grid item md={ 4 } xs={ 12 }>
          { 
            editing ? (
              <EditUserForm 
                editing={ editing } 
                setEditing={ setEditing }
                currentUser={ currentUser } 
                updateUser={ updateUser } 
              />
            ) : (
              <AddUserForm addUser={ addUser } />
            )
          }
        </Grid>
        <Grid item md={ 8 } sm={ 12 }>
          <h2>
            View users
          </h2>
          <UserTable users={ users } deleteUser={ deleteUser } editRow={ editRow } />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}


export default App;
