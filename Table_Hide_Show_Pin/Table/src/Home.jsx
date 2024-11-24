import { useMemo } from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

const data = [
    {
        id: 1,
        name: {
            firstName: 'John',
            middleName: 'shok',
            lastName: 'Doe',
        },
        gender: 'Male',
        age: '27',
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        id: 2,
        name: {
            firstName: 'Jane',
            middleName: 'Deno',
            lastName: 'Doe',
        },
        gender: 'female',
        age: '29',
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        id: 3,
        name: {
            firstName: 'Joe',
            middleName: 'Karla',
            lastName: 'Doe',
        },
        gender: 'Male',
        age: '37',
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        id: 4,
        name: {
            firstName: 'Kevin',
            middleName: 'Mathu',
            lastName: 'Vandy',
        },
        gender: 'Male',
        age: '27',
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        id: 5,
        name: {
            firstName: 'Joshua',
            middleName: 'Loni',
            lastName: 'Rolluffs',
        },
        gender: 'female',
        age: '25',
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
    {
        id: 6,
        name: {
            firstName: 'Joshuanu',
            middleName: 'Lonihu',
            lastName: 'Rolluffs',
        },
        gender: 'female',
        age: '25',
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
    {
        id: 7,
        name: {
            firstName: 'Komila',
            middleName: 'koni',
            lastName: 'Rolluffs',
        },
        gender: 'female',
        age: '25',
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
];

function Home() {
    const handleUpdate = (row) => {
        console.log('Update clicked for:', row.index);
        // Add logic for update action
    };

    const handleDelete = (row) => {
        console.log('Delete clicked for:', row.index);
        // Add logic for update action
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                enableColumnPinning: false, //disable column pinning for this column
                header: 'ID',
                size: 50,
            },
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'name.middleName', //access nested data with dot notation
                header: 'Middle Name',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'gender', //normal accessorKey
                header: 'Gender',
                size: 150,
            },
            {
                accessorKey: 'age', //normal accessorKey
                header: 'Age',
                size: 150,
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableColumnPinning: true,
        enableRowActions: true,
        layoutMode: 'grid-no-grow', //constant column widths
        renderRowActionMenuItems: ({ row }) => [
            <MenuItem key="update" onClick={() => handleUpdate(row)}>
                <ListItemIcon>
                    <EditIcon style={{ color: 'blue' }} /> {/* Add an icon with a custom color */}
                </ListItemIcon>
                <ListItemText primary="Update" />
            </MenuItem>,
            <MenuItem key="delete" onClick={() => handleDelete(row)}>
                <ListItemIcon>
                    <DeleteIcon style={{ color: 'red' }} /> {/* Add an icon with a custom color */}
                </ListItemIcon>
                <ListItemText primary="Delete" />
            </MenuItem>,
        ],
        initialState: {
            columnPinning: { left: ['mrt-row-actions', 'state'], right: ['city'] },
        },
    });

    return (
        <>
            <Link to="/calender" className='btn btn-success my-3'>Calender</Link>
            <MaterialReactTable table={table} />;
        </>
    )

}

export default Home
