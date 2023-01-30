
    import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import CategoryRow from './CategoryRow'
import './category.css'
import ImageTab from './ImageTab'
    import { Route,Routes } from 'react-router-dom'
    import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caursol from './Caursol.js'
    export default function Home() {
      
      return (
        <div>
          <Caursol />
<CategoryRow />
        </div>
      )
    }
    