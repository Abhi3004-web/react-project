import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
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
    <>
      <h1>Registration form</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input type="text"
            name="name"
            value={formData.name}
            onChange={onhandlechange}></input>
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>
        <div>
          <label>Age : </label>
          <input type="number"
            name="age"
            value={formData.age}
            onChange={onhandlechange}></input>
          {error.age && <p style={{ color: "red" }}>{error.age}</p>}
        </div>
        <div>
          <label>Adress : </label>
          <input type="text"
            name="address"
            value={formData.address}
            onChange={onhandlechange}></input>
          {error.address && <p style={{ color: "red" }}>{error.address}</p>}
        </div>
        <div>
          <label>gender : </label>

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
        <div>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </>
  )
}

export default App
