import React from 'react'
import './category.css'
import { Link, Links } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import ImageTab from './ImageTab'

export default function CategoryRow() {

  const smartphones = useSelector(state => state.alldata.category.smartphones)
  const laptops = useSelector(state => state.alldata.category.laptops)
  const homedecoration = useSelector(state => state.alldata.category.homedecoration)

  const portion_smartphones = smartphones.slice(0, 4);
  const portion_laptops = laptops.slice(0, 4);
  const portion_decoration = homedecoration.slice(0, 4);
  console.log(portion_smartphones)
  return (
    <div>
      <div className="mainrow">

        <div className="rowinner">

          <div className="alltabmain">

            <pre className='rowheadings'>Smartphones with fastest processors</pre>
            <div className="smartphonetabmain itemsrow">
              {
                portion_smartphones?.map((phone) => {
                  return <Link to="/product">
                    <ImageTab data={phone} id={phone.id} />
                  </Link>
                })}
            </div>
            <pre className='rowheadings'>Laptops the you like</pre>
            <div className="laptoptabmain itemsrow ">
              {
                portion_laptops?.map((phone) => {
                  return <Link to="/product">
                    <ImageTab data={phone} id={phone.id} />
                  </Link>
                })}

            </div>
            <pre className='rowheadings'>Home Decoration just got Updated</pre>
            <div className="homedecotabmain itemsrow">
              {
                portion_decoration?.map((phone) => {
                  return <Link to="/product">
                    <ImageTab data={phone} id={phone.id} />
                  </Link>
                })}
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
