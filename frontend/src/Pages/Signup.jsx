import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Signup.css"

function Signup() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (formValues) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:4001/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues)
            });
            if (!response.ok) {
                throw new Error("Failed to register");
            }
            console.log("Registration successful", response);
            navigate("/login");
        } catch (error) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Your first name is required"),
        lastName: Yup.string().required("Your last name is required"),
        username: Yup.string().required("Please enter your username"),
        email: Yup.string().email("Invalid email address").required("Please enter your email"),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required("Please enter your password")
    });

    return (
        <div className='Big-signup'>
            <Formik
                initialValues={{ firstName: "", lastName: "", username: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, values, handleChange }) => (
                    <Form className='Signup-form'>
                        <h1>Sign up</h1>
                        <div className='Sign-up'>
                            <div className='signup-details'>
                                <label htmlFor="firstName">First Name</label>
                                <Field
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    className="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='firstName' component="div" className='error' />
                            </div>
                            <div className='signup-details'>
                                <label htmlFor="lastName">Last Name</label>
                                <Field
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    className="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='lastName' component="div" className='error' />
                            </div>
                            <div className='signup-details'>
                                <label htmlFor="username">Username</label>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    className="username"
                                    value={values.username}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='username' component="div" className='error' />
                            </div>
                            <div className='signup-details'>
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='email' component="div" className='error' />
                            </div>
                            <div className='signup-details'>
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='password' component="div" className='error' />
                            </div>
                            <div className='Signup-button'>
                                <button type='submit' disabled={isSubmitting} className='Signbtn'>
                                    Sign up
                                </button>
                            </div>
                        </div>
                        <p className='loginpara'>If you have an account, click here <Link to="/login">Login</Link> to continue</p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Signup;
