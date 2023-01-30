import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './category.css'
import ImageTab from './ImageTab'


import axios from 'axios'
export default function SearchProducts() {
    const [category, setcategory] = useState()

//     const catstate = useSelector(state => state.alldata.categoryselect);
//  const trick=()=> {setcategory(catstate)}
//  trick();
    //  setcategory(useSelector(state=>state.alldata.categoryselect))

    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([]);
    const [newarray2,setnewarray2]=useState([]);
    // useEffect(() => {
    //     axios.get(`https://dummyjson.com/products/category/${category}`).then(res => setdata(res.data))
    //     console.log(data)
  
    // }, [category])
    console.log(data.products)
    
    useEffect(() => {
        axios.get('https://dummyjson.com/products?skip=0&limit=100').then(res => setdata2(res.data.products))


    }, [])
    const newarray = data2?.slice(0, 20);
    return (
        <div>
<div className="smartphonetabmain itemsrow">
              {
                newarray2?.map((phone) => {
                  return <Link to="/product">
                    <ImageTab data={phone} id={phone.id} />
                  </Link>
                })}
            </div>

            <div className="smartphonetabmain itemsrow">
                <Grid className="moviecardmain" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 5.7, sm: 8, md: 12 }} direction="row"
                    justifyContent="center"
                    alignItems="center" >
                    {newarray?.map((movie) => (
                        <Grid item xs={2} sm={2} md={2} >
                            <Item><Link to="/product">
                                <ImageTab data={movie} id={movie.id} />
                            </Link></Item>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

                        // return <Link to="/product">
                        //     <ImageTab data={phone} id={phone.id} />
                        // </Link>