import React, { useState } from 'react'
import { addUser } from './UserReducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitData = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: users.length > 0 ? users[users.length - 1].id + 1 : 1, name, email }))
        navigate('/');
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h2>Add new User</h2>
                <form onSubmit={submitData}>
                    <div>
                        <label htmlFor='name'>Name : </label>
                        <input type='text' name='name' className='form-control' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email : </label>
                        <input type='text' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <br />
                    <button className='btn btn-info'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
