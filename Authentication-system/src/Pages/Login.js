import React,{useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import Axios from 'axios';
import './Login.css';
import * as Yup from 'yup';
import {useHistory,Link} from 'react-router-dom';

function Login(){


    const history=useHistory();

    const initialValues = {
        mailid:'',
        passcode:''
    }
    
    const onSubmit = values =>{
          Axios.post("http://localhost:3001/login",{
              email:values.mailid,
              password:values.passcode}).then((response)=>{
                  if(response.data.message){
                      console.log(response);
                      setloginStatus(response.data.message);
    
                  } else if(response.data[0].email.length>0){
                        console.log(response);
                        history.push('/dashboard');
                  }
              });
    
    };
    
    const validationSchema = Yup.object({
        mailid: Yup.string().email('Invalid Email format').required('Fill this field'),
        passcode: Yup.string().required('Password is required')
    })

    const [loginStatus,setloginStatus] = useState('');

     return(
         <div>
             <div className='container'>
             <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                       <Form>
                       <h3>Login Form</h3>
                        <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" id='mailidlab'className="form-label">Email</label>
                                                <Field type="email" className="form-control" id="mailid" name="mailid" placeholder="email" />
                                                <ErrorMessage name="mailid" id='errors' />
                        </div>
                        <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                                <Field type="text" className="form-control" id="passcode" name="passcode" placeholder="password" />
                                                <ErrorMessage name="passcode" />
                        </div>
                        <div className='form-group'>
                    <button id='btnin1' type='submit'>Login</button>
                </div>
                       </Form>
             </Formik>
             <div className='contain'>
             <h7><Link className='loginlink' to ={'/signup'}>Don't have an Account??</Link></h7>
             </div>
             <div>
             {loginStatus} 
                 </div> 
             </div></div>
             
     )


}


export default Login;