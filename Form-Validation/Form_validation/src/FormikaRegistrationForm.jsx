import React, { useState } from 'react'
import * as Yup from 'yup'

function FormikaRegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("last name is required"),
        email: Yup.string().required("Email is required").email("Email format is not valid"),
        phoneNumber: Yup.string().matches(/^\d{10}$/, "phone number must be 10 digit").required("phone number is required"),
        password: Yup.string().required("password is required").min(8, "minimum 8 digit is required").matches(/[!@#$%^&*(),.?":{}|<>]/, "password must contain at least one special symbol").matches(/[0-9]/, "at least one number").matches(/[A-Z]/, "at least one upper case").matches(/[a=z]/, "at least one lowercase"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "password must match"),
        age: Yup.number().typeError("Age must be a number").min(18, " Age must be at least 18 years old").max(100, "age is not greater than 100").required("age is required"),
        birthDate: Yup.date().required("Date of birth is reuired"),
    });

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log("form submitted", formData);
        } catch (error) {
            const newErrors = {};

            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });

            setErrors(newErrors);
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

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterests = [...formData.interests];
        if (checked) {
            updatedInterests.push(name);
        } else {
            updatedInterests = updatedInterests.filter(
                (interest) => interest !== name
            );
        }

        setFormData({
            ...formData,
            interests: updatedInterests,
        });
    };

    return (
        <div>
            <h1>Student Registration Form</h1>
            {isSubmitted && <div className="success-message">Form submitted successfully!</div>}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="Enter your first name"
                        onChange={handleChange}
                    />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter your last name"
                        onChange={handleChange}
                    />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                        <div className="error">{errors.phoneNumber}</div>
                    )}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm your password"
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <div className="error">{errors.confirmPassword}</div>
                    )}
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        placeholder="Enter your age"
                        onChange={handleChange}
                    />
                    {errors.age && <div className="error">{errors.age}</div>}
                </div>

                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <div className="error">{errors.gender}</div>}
                </div>

                <div>
                    <label>Interests:</label>
                    <label>
                        <input
                            type="checkbox"
                            name="coding"
                            checked={formData.interests.includes("coding")}
                            onChange={handleCheckboxChange}
                        />
                        Coding
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="sports"
                            checked={formData.interests.includes("sports")}
                            onChange={handleCheckboxChange}
                        />
                        Sports
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="reading"
                            checked={formData.interests.includes("reading")}
                            onChange={handleCheckboxChange}
                        />
                        Reading
                    </label>
                    {errors.interests && <div className="error">{errors.interests}</div>}
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        placeholder="Enter your date of birth"
                        onChange={handleChange}
                    />
                    {errors.birthDate && <div className="error">{errors.birthDate}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormikaRegistrationForm
