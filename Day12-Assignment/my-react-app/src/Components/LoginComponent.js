import { useDispatch } from "react-redux"
import { addUser } from './userSlice.js';
import {Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const LoginComponent = () => {
    const validate = Yup.object({
        firstName:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
        lastName:Yup.string().max(20,"Must be 15 characters or less").required("Required"),
        email:Yup.string().email(15,"Email is invalid").required("email is Required"),
        password:Yup.string().min(6,"Must be 15 characters or less").required("Password is Required"),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],"Passwords must match").required("Password is Required"),

    })
   
    const dispatch = useDispatch();
    const addUserInfo = (values) => {
        dispatch(addUser({
            name: values.firstName,

        }))
    }
    return (
        <Formik
         initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:'',
         }} 
         validationSchema={validate}
          onSubmit={values=>{
            console.log(values);
            addUserInfo(values);
          }}
        >
            {formik=>(
                <div>
                    <h1>Login</h1>
                    {console.log(formik.values)}
                    <Form >
                    <TextField label="First Name" name="firstName" type="text"/>
                    <TextField label="Last Name" name="lastName" type="text"/>
                    <TextField label="Email" name="email" type="email"/>
                    <TextField label="Password" name="password" type="password"/>
                    <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                    <button type="submit">Login</button>
                    </Form>
                </div>
            )}
    
        </Formik>
    )
}

export default LoginComponent