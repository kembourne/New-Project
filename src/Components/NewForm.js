import React from 'react'
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Form from './Form.js'
import { isLogin } from '../Redux/slice.js';
export default function NewForm() {
    const[what,updatewhat]=useState(false)

const dispatch = useDispatch();
dispatch(isLogin(what));
    return (
        <div className='newloginmain' >
    <button className='addnewbutton' onClick={()=>updatewhat(!what)}> <PersonAddIcon className='personicon' /></button>
        <p className='newlogintext'>Already a member? </p>
        <p className='newlogintext'> Sign in then.</p>
        </div>
      )
    
}
