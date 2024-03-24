import React, { useEffect, useState} from "react";
import styles from "./salon.module.css";
import logo from "../imagen/zeta.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux"
import {getPlates} from "../actions/action";
import Navbartres from "./nav";
import Footer from "./Footer";

const Salon = () => {
    
    const plates= useSelector(state=>state.plate)
    const [state, setState] = useState(true)
    const dispatch = useDispatch();
    const typeSalonParty = plates.filter(el => el.type.includes("Salon"))

    useEffect(()=>{
        dispatch(getPlates())
    },[dispatch])
   
console.log(typeSalonParty);
    return (
  <>
   <div><Navbartres/></div>
  <div className={styles.cont}>
    <ul className={styles.ul}>
        <li>San Miguel.</li>
        <li>Salon equipado.</li>
        <li>Equipo de profesionales.</li>
        <li>Menú formal.</li>
        <li>Menú informales.</li>
        <li>Salón + menú formal.</li>
        <li>Pizza party.</li>
        <li>Pastas party.</li>
        <li>Mila party.</li>
        <li>Tacos party</li>
        <li>Menu parrillero/Asado.</li>
        <li>Viandas.</li>
    </ul>
    
          <div className={styles.sliderwrapper}>
          
        
              <div className={styles.slider}>
          
            {
              
               typeSalonParty? typeSalonParty.map(el =><img src={el.image} alt=""></img>):""
            }
        
              </div>
       </div>
    </div>
    <div><Footer/></div>
  </>

    );
  };
export default Salon
