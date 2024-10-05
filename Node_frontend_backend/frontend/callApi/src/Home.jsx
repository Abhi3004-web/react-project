import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import axios from 'axios';

function Home() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
        gender: "",
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});

    const onhandlechange = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        setError({
            ...error,
            [name]: "",
        });
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    const validateForm = () => {
        const errors = {};
        if (formData.name.trim() === "") errors.name = "name is required";
        if (formData.age.trim() === "") errors.age = "age is required";
        else if (formData.age.trim() < 18) errors.age = "age must be greater than 18.";
        else if (formData.age.trim() > 50) errors.age = "age must be less than 50";
        if (formData.address.trim() === "") errors.address = "address is required";
        if (formData.gender.trim() === "") errors.gender = "gender is required";
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        let response = validateForm();
        if (Object.keys(response).length > 0) {
            setError(response);
            setMessage('Error creating user');
        } else {
            const response = await axios.post('http://localhost:5000/addData', formData);
            setMessage(response.data.message);
            setFormData({ name: '', age: '', address: '', gender: '' }); // Reset form
        }
    };

    return (
        <div className='container'>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <h1 className='header'>Registration form</h1>
            {message && <p className={(((Object.values(error)[0] !== '') || (Object.values(error)[1] !== '') || (Object.values(error)[2] !== '') || (Object.values(error)[3] !== '')) ? `errorTag` : `successTag`)}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label>Name : </label>
                    </div>
                    <div className="col-75">
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={onhandlechange}></input>
                        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Age : </label>
                    </div>
                    <div className="col-75">
                        <input type="number"
                            name="age"
                            value={formData.age}
                            onChange={onhandlechange}></input>
                        {error.age && <p style={{ color: "red" }}>{error.age}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Adress : </label>
                    </div>
                    <div className="col-75">
                        <input type="text"
                            name="address"
                            value={formData.address}
                            onChange={onhandlechange}></input>
                        {error.address && <p style={{ color: "red" }}>{error.address}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>gender : </label>
                    </div>
                    <div className="col-75">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={onhandlechange}
                            />
                            Male
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={onhandlechange}
                            />
                            Female
                        </label>
                        {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className='submitRecord'>Submit Data</button>
                </div>
            </form>
        </div>
    )
}


export default Home
