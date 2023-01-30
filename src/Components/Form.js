import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material'
import NewForm from "./NewForm";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { isLogin } from '../Redux/slice.js';
import users from "./users";
import './Formall.css'
import { Link } from "react-router-dom";
import { seterror } from "../Redux/slice.js";
export default function App() {
  const islogin = useSelector(state => state.alldata.newLogin)



const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const onSubmit = data => console.log(data);


  const values = getValues();

  return (
    <div className="lastmain">


      <div className="formmostmain">

        <h1>{islogin ? "Log In" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="formmain">
            <div className="formmaininner">



              {!islogin ? <TextField id="outlined-basic1" label="First Name" variant="outlined"
                {...register("Name", { required: "Name is required", maxLength: { value: 10, message: "Valid length Exceeded" } })} /> : " "}
              <p className="errortext">{errors.Name?.message}</p>
              <TextField id="outlined-basic2" label="Email" variant="outlined"
                {...register("Email", { required: "Email is required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Not valid pattern" } })} />
              <p className="errortext">{errors.Email?.message}</p>
              <TextField id="outlined-basic3" label="Password" variant="outlined" type="password"
                {...register("Password", { required: "password is required", minLength: { value: 10, message: "Not valid lenght" } })}

              />

              <p className="errortext">{errors.Password?.message}</p>

              <Button type="submit" variant="contained" ><Link to={!errors ? 'home' : ""}>{islogin ? "Log In" : "Sign Up"}</Link></Button>

              {islogin ? <pre>New to Website ? <a href="" className="signuphref">Sign Up</a></pre> : ""}
            </div>

          </div>

        </form>



      </div>
      {!islogin ? <NewForm /> : ""}
    </div>
  );
}