import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getPlates,  vaciarDetail} from "../actions/action";
import styles from "./admin.module.css";

import  {deletePlate}  from "../actions/action";

import Navbartres from "./nav";
import Admincard from "./admincard";
import { orderByTypes } from "../actions/action";

export default function Admin() {
    const dispatch = useDispatch();
    const typeFiltro = useSelector(state => state.types)


    

   
   
    const types = ["Pizza party","Asado/Parrillero","Mila party","Tacos party","Pastas party","Viandas", "Salon + Catering"]

    const [state, setState] = useState(true)
   
  
   
    useEffect(()=>{
        dispatch(getPlates()) 
    },[dispatch])


   
  
    function handlerOrderByTypes(e) {
        dispatch(orderByTypes(e.target.value))
        setState(!state)
    }
    return (
        <>
        
        <div className={styles.cont}>
   
        <Navbartres/>
        <div className={styles.divFilter}>
        <select onChange={e => handlerOrderByTypes(e)} defaultValue='default' className={styles.filters}>
                       
                       <option value = "default">Filtrar por:</option>
                       {
                          types && types.map(a => (
                               <option value = {a} key={a.id}> {a} </option>))
                       }
       </select>
       </div >
       <div className={styles.body}>
        {
           
            typeFiltro ? typeFiltro.map(el =>{ 
                return <Admincard name = {el.name} price={el.price} description={el.description} type={el.type} id={el.id} image={el.image} key={el.id}/>
            }) : null
        }
        </div>
            
            
        </div>
        </>
    )
}
