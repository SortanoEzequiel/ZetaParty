import React, { useEffect, useState} from "react";
import styles from "./cardMilaFilter.module.css";
import {Link} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux"
import { deletePlate, getPlates } from "../actions/action";




const CardMilaFilter = (props) => {
   
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    const plates= useSelector(state=>state.plate)
    const [state, setState] = useState(true)
    const dispatch = useDispatch();
    const typeViandasParty = plates.filter(el => el.type.includes("Viandas"))

    console.log("milafil",props);
    useEffect(()=>{
        dispatch(getPlates()) 
        
    },[dispatch])
   
    
    
  

    return(
        <>
 

     <div className={styles.container}>
        <div className={styles.row}>  
           <div className={styles.card}>
             <img src={props.image} alt="" widht="100%" height="40%"></img>
             <h4>{props.name}</h4>
             
             
             <p>{props.description}.</p>
             
             <h2>${props.price}</h2>
          </div>
          
        </div>
     </div>
   

        
           </>
    )
}

export default CardMilaFilter






  //         currentPokemons === 1? currentPokemons.map( el => {
        //          return <Card name={el.name} types={el.types.map(el => el.name)} id={el.id} img={el.sprites} pais={el.pais} key={el.id} /> }):
        //         currentFiltro.map( el => {
        //          return <Card name={el.name} types={el.types.map(el => el.name)} id={el.id} img={el.sprites} key={el.id} /> })
             
        // }