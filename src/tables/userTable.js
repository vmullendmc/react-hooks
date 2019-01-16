import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const UserTable = props => {
    console.log('table props', props)
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Username
                    </TableCell>
                    <TableCell>
                        Actions
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.users && props.users.length > 0 ? (
                        props.users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    {user.name}
                                </TableCell>
                                <TableCell>
                                    {user.username}
                                </TableCell>
                                <TableCell>
                                    <div style={{}}>
                                        <button onClick={() => {
                                            props.editRow(user)
                                        }}>
                                            Edit
                                        </button>
                                        <button onClick={() => props.deleteUser(user.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                            <TableRow>
                                <TableCell colSpan={3}>No users</TableCell>
                            </TableRow>
                        )
                }
            </TableBody>
        </Table>
    )
}

export default UserTable;