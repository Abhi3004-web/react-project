import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from './UserReducers';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filterUserDetails = users.filter(item => item.id == id);
    const { name, email } = filterUserDetails[0];
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);

    const updateData = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: id, name: newName, email: newEmail }))
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h2>Update User Details</h2>
                <form onSubmit={updateData}>
                    <div>
                        <label htmlFor='name'>Name : </label>
                        <input type='text' name='name' className='form-control' onChange={(e) => setNewName(e.target.value)} value={newName}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email : </label>
                        <input type='text' name='email' className='form-control' onChange={(e) => setNewEmail(e.target.value)} value={newEmail}></input>
                    </div>
                    <br />
                    <button className='btn btn-info'>update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
