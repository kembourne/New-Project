import React, { useState } from 'react'
import { useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import DoneIcon from '@mui/icons-material/Done';
import { addtocart } from '../Redux/slice';
export default function DetailProduct(props) {
const dispatch=useDispatch();


const handleCart=()=>{
dispatch(addtocart(props.current))
}
   
    return (
        <div>
          
            <div className="alldetailshow">
                <div className="summarytab">
                <h1  className='h1andh4'>Summary</h1>
                <h4 className='h1andh4'>Product Description</h4>
<div className="summarytabinner">
{
                    props.data?.map(prop => {
                      return  <div className='summarydetail'>
                        <DoneIcon className='doneicon'/>  <pre className='trick'>{prop.x}</pre>  :  <pre>{prop.y}</pre>
                        </div>
                    })


                }
</div>
                </div>
               
                <div className="cartbutton" onClick={()=>handleCart()}>
                    <h1>Add To Cart</h1>
                    <pre onClick={()=>handleCart()}>Total: 34$</pre>
                </div>
            </div>
        </div>
    )
}
