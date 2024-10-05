import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Create = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/allRecords');
                setData(response.data);  // Store the fetched data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);  // The empty array ensures the effect runs only once (on component mount)

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/delete/${id}`);
            const filterData = data.filter((item) => item._id !== id);
            setData(filterData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className='container'>
            <Link to="/" className='btn btn-success my-3'>Home</Link>
            <h1 className='header'>Fetched Data</h1>
            {data.length > 0 ? <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.gender}</td>
                            <td>
                                <Link to={`/update/${item._id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(item._id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table> : <p>Data is not found</p>}
        </div>
    )
}

export default Create
