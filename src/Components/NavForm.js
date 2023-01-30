import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material'
import NewForm from "./NewForm";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { isLogin } from '../Redux/slice.js';
import './Formall.css'
import { Link } from "react-router-dom";
export default function App() {
  const islogin = useSelector(state => state.alldata.newLogin)


  const { register, handleSubmit, formState: { errors } ,getValues} = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors)
const values=getValues();
console.log(values)
  return (
    <div className="lastmain">


      <div className="formmostmain">

        <h1>Log In</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="formmain">
            <div className="formmaininner">



        
              <TextField id="outlined-basic2" label="Email" variant="outlined"
                {...register("Email", { required: "Email is required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Not valid pattern" } })} />
              <p className="errortext">{errors.Email?.message}</p>
              <TextField id="outlined-basic3" label="Password" variant="outlined" type="password"
                {...register("Password", { required: "password is required", minLength: { value: 10, message: "Not valid lenght" } })}

              />

              <p className="errortext">{errors.Password?.message}</p>

              <Button type="submit" variant="contained">Log In</Button>

          <Link to="/" className="signuphref">New to Website ? Sign Up</Link>
            </div>

          </div>

        </form>



      </div>
      
    </div>
  );
}