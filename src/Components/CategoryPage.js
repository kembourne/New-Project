import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import login from './login-background.jpg'
import CategoryRow from './CategoryRow.js';
import './category.css'
import {Update1,Update2,Update3} from '../Redux/slice.js'
export default function CategoryPage() {
  const [data,setdata]=useState([]);
  const [catdata,setcatdata]=useState([])
  const phonedata=[];
  const laptopdata=[];
  const homedeco=[];
  
  useEffect(() => {
    axios.get('https://dummyjson.com/products?skip=0&limit=100').then(res => setdata(res.data.products))
   
   
  },[])


  const dispatch=useDispatch();
data?.map(e =>{
if(e.category==='smartphones'){
phonedata.push(e)

}
else if(e.category==='laptops'){
  laptopdata.push(e);
}
else if(e.category==='home-decoration'){
  homedeco.push(e);
}
})
 useEffect(()=>{
dispatch(Update1( phonedata));
dispatch( Update2( laptopdata));
dispatch(Update3(homedeco))
 },[phonedata,homedeco,laptopdata])

const style={
  backgroundImage:`url(${login})`,
  backgroundPosition:"center",
  backgroundSize:"contain"
  
}
  return (
    <div>
        <div className="categoryupper">
          <div className="categoryuppersecond">
    <h1 className='mainh1'>Enseignes</h1>
            <div className="categoryupperimage categoryimage1" style={{style}}>

            </div>
            <div className="categoryupperimage categoryupperimage2 ">
              <h4 className='categoryh1'>Lorem, ipsum dolor.</h4>
              <p className='categorypara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut accusantium, facilis nesciunt recusandae distinctio velit fuga? Alias, atque. Molestias adipisci enim tempora voluptate sapiente. Nostrum repellendus facere in harum necessitatibus culpa totam suscipit, animi, officiis maxime qui quis fuga dolore, ipsam veritatis accusamus. Quod velit maiores, officiis quae veritatis doloribus voluptatibus? Rem possimus mollitia fugit nostrum est amet, repudiandae ullam cum modi labore tempore illo? Libero qui animi dolores cum veniam cumque, quae officiis sit voluptatem consequuntur autem deleniti, minima doloribus? Laudantium reprehenderit vel aliquid, perferendis nostrum nulla consectetur minus impedit dolores iste eveniet, alias itaque repudiandae tempore cumque doloribus?
              </p>
            </div>
          </div>
        </div>
    <CategoryRow />
    </div>
  )
}
