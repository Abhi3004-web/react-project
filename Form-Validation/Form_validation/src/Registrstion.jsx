import React, { useState } from 'react';

function Registrstion() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        city: "",
        phone: "",
        gender: "",
        address: "",
        course: ""
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation function
    const validate = (values) => {
        const errors = {};
        const regex = /^\d{10}$/;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.phone) {
            errors.phone = 'Phone number is required';
        } else {
            if (!regex.test(values.phone)) {
                errors.phone = 'Currect Phone number is required';
            }
        }

        if (!values.email) {
            errors.email = 'email is required';
        } else {
            if (!emailRegex.test(values.email)) {
                errors.email = 'Currect email is required';
            }
        }

        if (!values.address) {
            errors.address = 'Address is required';
        }

        if (!values.course) {
            errors.course = 'Please select a course';
        }

        if (!values.gender) {
            errors.gender = 'Please select a gender';
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            console.log('Form submitted successfully', formData);
        }
    };

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Student Registration Form</h1>
            {isSubmitted && <div className="success-message">Form submitted successfully!</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input
                        type='text'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                </div>

                <div>
                    <label>Age : </label>
                    <input
                        type='number'
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    {formErrors.number && <p className="error">{formErrors.number}</p>}
                </div>
                <div>
                    <label>Email : </label>
                    <input
                        type='email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>

                <div>
                    <label>City : </label>
                    <input
                        type='text'
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {formErrors.city && <p className="error">{formErrors.city}</p>}
                </div>

                <div>
                    <label>Phone : </label>
                    <input
                        type='text'
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                </div>

                <div>
                    <label>Gender : </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                    {formErrors.gender && <span className="error">{formErrors.gender}</span>}
                </div>

                <div>
                    <label>Address : </label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                    {formErrors.address && <span className="error">{formErrors.address}</span>}
                </div>

                <div>
                    <label>Course :</label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                    >
                        <option value="">--Please choose course--</option>
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                        <option value="Computer">Computer</option>
                    </select>
                    {formErrors.course && <span className="error">{formErrors.course}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registrstion;
