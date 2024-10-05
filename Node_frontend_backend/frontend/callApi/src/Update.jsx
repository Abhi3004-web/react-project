import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
    const { _id } = useParams(); // Get _id from the route parameters
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
        gender: "",
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});

    const validateForm = () => {
        const errors = {};
        if (formData.name.trim() === "") errors.name = "name is required";
        if (formData.age.toString().trim() === "") errors.age = "age is required";
        else if (formData.age.toString().trim() < 18) errors.age = "age must be greater than 18.";
        else if (formData.age.toString().trim() > 50) errors.age = "age must be less than 50";
        if (formData.address.trim() === "") errors.address = "address is required";
        if (formData.gender.trim() === "") errors.gender = "gender is required";
        return errors;
    }

    const onhandlechange = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    // Fetch the existing record to display in the form
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/update/${_id}`);
                setFormData(response.data);  // Set the data to populate the form
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [_id]);

    // Handle form submission to update the record
    const handleUpdate = async (e) => {
        e.preventDefault();
        let response = validateForm();
        if (Object.keys(response).length > 0) {
            setError(response);
            setMessage('Error creating user');
        } else {
            try {
                await axios.put(`http://localhost:5000/update/${_id}`, formData);
                setMessage('Record updated successfully!');
                navigate(-1);
            } catch (error) {
                console.error('Error updating data:', error);
                setMessage('Error updating record.');
            }
        }
    };


    return (
        <div className='container'>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <h1 className='header'>Update Records</h1>
            {message && <p className={(((Object.values(error)[0] !== '') || (Object.values(error)[1] !== '') || (Object.values(error)[2] !== '') || (Object.values(error)[3] !== '')) ? `errorTag` : `successTag`)}>{message}</p>}
            <form onSubmit={handleUpdate}>
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
                                value={formData.gender}
                                checked={formData.gender.toLowerCase() === "male"}
                                onChange={onhandlechange}
                            />
                            Male
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender.toLowerCase() === "female"}
                                onChange={onhandlechange}
                            />
                            Female
                        </label>
                        {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className='submitRecord'>Update Data</button>
                </div>
            </form>
        </div>
    )
}

export default Update
