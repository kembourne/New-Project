import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { categoryselected } from '../Redux/slice';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "smartphones",
	"laptops",
	"fragrances",
	"skincare",
	"groceries",
	"home-decoration",
	"furniture",
	"tops",
  "womens-dresses",
	"womens-shoes",
  	"mens-shirts",
  	"mens-shoes",
  	"mens-watches",
  	"womens-watches",
  	"womens-bags",
  	"womens-jewellery",
  	"sunglasses",
  	"automotive",
  	"motorcycle",
  	"lighting",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
        padding:"5px"
  };
}


export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [data, setdata] = useState([])
  const [data2, setdata2] = useState([]);
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${personName}`).then(res => setdata(res.data))
    
  }, [personName])
  console.log(data)
  


  useEffect(()=>{
     setdata2(data);
    data? data2?.slice(0,4) : console.log("hello")
  
   },[data])


  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(categoryselected(personName[personName.length-1]))
},[data2])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl className='fuck' sx={{ m: 1, width: 300, mt: 0 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Search Categories</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Search Categories</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}