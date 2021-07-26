import React, { useState } from 'react';
import {Formik,Form,ErrorMessage,Field} from 'formik';
import * as Yup from'yup';
import './Register.css';
import Axios from 'axios';
import {Route,Switch,BrowserRouter, Redirect ,Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';




function Register(){
     

    const [regstatus,setregstatus] = useState('');
    
   
    const history = useHistory();

  const initialValues ={
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values =>{
    Axios.post('http://localhost:3001/register',{
      firstname:values.firstname,
      lastname:values.lastname,
      email:values.email,
      password:values.password
    }).then((response)=>{
      console.log(response)
      if(response.data.message){
        console.log(response);
        if(response.data.message==='You have successfully registered'){
                   history.push('/dashboard')
        }
      
        setregstatus(response.data.message);} 
    });
};

const validationSchema = Yup.object({
    firstname: Yup.string().required('First Name is Required'),
    lastname: Yup.string().required('Last Name is also Required'),
    email: Yup.string().email('Invalid Email/Password').required('Email is Required'),
    password: Yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.')
})


    return(
         <div>
            <Formik  initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                   <Form>
                 <div className='container'>    
                   <h3>Signup Form</h3>
                   <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                    <Field type="text" className="form-control" id="firstname" name="firstname" placeholder="First name" />
                    <ErrorMessage name="firstname" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                    <Field type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                    <ErrorMessage name="lastname" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <Field type="email" className="form-control" id="email" name="email" placeholder="mail id" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <Field type="password" className="form-control" id="password" name="password" placeholder="password" />
                    <ErrorMessage name="password" />
                  </div>
                <div className='form-group'>
                    <button id='btnin' type='submit'>Sign Up</button>
                </div>
                <div className="mb-3">
              <Link to ={'/login'} className='signuplink'><p className='signuplink'>Already have an Account??</p></Link>
            
              </div>
              </div>
                   </Form>
            </Formik>
            
              
              
    <div className='resultdata' role='alert'>{regstatus} </div>
            </div>
    )
}




export default Register;