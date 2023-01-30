import React, { useEffect, useState } from 'react'
import DetailProduct from './DetailProduct';
import { useSelector ,useDispatch} from 'react-redux/es/hooks/useSelector';
import { addtocart } from '../Redux/slice';
export default function ProductPage() {
    const [thatarray, updatethatarray] = useState([]);
    const addtodetail = (x, y) => {
        updatethatarray(prevarray =>
            [...prevarray, { x, y }]

        );
    }

    const current=useSelector(state=>state.alldata.currentproduct)
    const detail = [
        {
            title: "Color",
            array: [
                " Black", "Red","Green"
            ]
        },

        {
            title: "Recharge",
            array: [
                " Yes", "No",
            ]
        },
        {
            title: "Quality",
            array: [
                " Bad", "Good",
            ]
        },
        {
            title: "Purchase",
            array: [
                " Cash on Delivery", "Card",
            ]
        },
        {
            title: "Delivery",
            array: [
                "5 days", "8 days", "2 Weeks",
            ]
        },
        {
            title: "Product review",
            array: [
                " Yes", "No",
            ]
        },

    ]
    return (
        <>


            <div>

                <div className="producttop">
                    <div className="productinner">
                        <h1>{current.title}</h1>
                        <div className="imagessection">

                            <div className="imagecontainer">
<img src={current?.thumbnail} alt="none" className="imagecontainerimage"/>
                            </div>
                            <div className="imagescontainer2">
                              {
                                current?.images?.map(image=>{
                                    return <img src={image} alt="none" className='shortimage'/>

                                  
                                })
                              }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bakwaassectionmain">

                <div className="bakwaassection">
                  
                       <p>S'il y a bien un support à ne pas manquer, c'est bien le Dibond de 3 mm d'épaisseur <br />! Que ce soit pour un projet en intérieur ou bien en extérieur, ce support répondra à toutes vos attentes en matière de signalétique. <br /> Composé d'un alliage entre PVC et aluminium, brle Dibond conserve une rigidité ainsi qu'une étanchéité sans précédent ! Vous pouvez désormais faire <br /> sticker un vinyle par-dessus la plaque pour recevoir votre produit terminé ! A noter : si vous choisissez une longueur <br /> 300cm, votre visuel sera imposé sur plusieurs plaques.</p>
                        
                        
                </div>
                </div>
                <div className="choicesmain">


                    <div className="choices">
                        <div className="choicesinner">
                            <h1 >Configuration</h1>
                            {
                                detail.map(elem => {
                                    return <>
                                        <h1>
                                            {elem.title}
                                        </h1>
                                        <div className="fuck2">
                                            {

                                                elem.array.map(elem2 => {
                                                    return <div className='innerchoice' onClick={() => addtodetail(elem.title, elem2)}>
                                                        {elem2}
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </>
                                }

                                )
                            }
                        </div>
                        <div>

                            <DetailProduct data={thatarray} current={current}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
