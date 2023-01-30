import React from 'react'
import './category.css'
import { useDispatch } from 'react-redux'
import { currentproduct } from '../Redux/slice'
export default function ImageTab(props) {
  const style = {
    backgroundImage: `url(${props.data.thumbnail})`,
    backgroundPosition: "center",
    backgroundSize: "contain"


  }
  const dispatch=useDispatch();
const handleEvent=(e)=>{
dispatch(currentproduct(e))
}

  return (
  

    <div className='tabmain' style={{ style }} onClick={()=>handleEvent(props.data)}>

      <img src={props.data.thumbnail} className='tabimg' alt="none" />
      <pre className='tabpre'>
        {props.data.title}
      </pre>
    </div>
   
  )
}
