import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { Link } from 'react-router-dom';
import "../App.css"

function MyForm (){
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()


  const initialValues = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const validateForm = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3 || values.name.length > 30) {
      errors.name = 'Name must be between 3 and 30 characters';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length <= 9) {
        errors.password = 'Password must be at least 10 characters';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
        errors.password = 'Password must contain at least 1 symbol';    
      }
  
    if (!values.repeatPassword) {
      errors.repeatPassword = 'Required';
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Passwords do not match';
    }
  
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setName(values.name)
    setEmail(values.email)
    setPassword(values.password)
    console.log(name,email,password)
    alert("Successfully loged in")
    setSubmitting(false);
  };

  return (
    <div className='background'>
      <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
    <Form>
    <h2>Create account</h2>
      <div>
        <Field className="forminput" type="text" id="name" name="name" placeholder="Name"/>
        <ErrorMessage name="name" component="div" className='errormessage'/>
      </div>

      <div>
        <Field className="forminput" type="email" id="email" name="email"  placeholder="Email"/>
        <ErrorMessage name="email" component="div" className='errormessage'/>
      </div>

      <div>
        <Field className="forminput" type="password" id="password" name="password" placeholder="Password"/>
        <ErrorMessage name="password" component="div" className='errormessage'/>
      </div>

      <div>
        <Field className="forminput" type="password" id="repeatPassword" name="repeatPassword" placeholder="Re-enter Password"/>
        <ErrorMessage name="repeatPassword" component="div" className='errormessage'/>
      </div>

      <button type="submit" className='submit'>Submit</button>

      <p>I already have an account   <span className='sign-in'>Sign-in</span></p>
    </Form>
  </Formik></div>
  );
};

export default MyForm
