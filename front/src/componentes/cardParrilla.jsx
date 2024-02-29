import React, { useEffect, useState} from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux"
import { deletePlate, getPlates } from "../actions/action";




const CardParrilla = (props) => {
   
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    const plates= useSelector(state=>state.plate)
    const [state, setState] = useState(true)
    const dispatch = useDispatch();
    const typeAsadoParty = plates.filter(el => el.type.includes("Asado/Parrillero"))

    
    const onClose =  (id) => {
        dispatch(deletePlate(id))
        // dispatch(getPlates)
        setState(true ? false : true)
     
    }
   
    
    
  

    return(
        <>
        
        <section className={styles.contenedor}>
        <Link  className={styles.cardParrilla} to="/parrillaParty">
          
          <span>Parrilla Party</span>
          </Link>
       
          {/* <div className={styles.sliderwrapper}>
          
        
              <div className={styles.slider}>
              {/* { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <div> 
                    <button onClick={() => onClose(id)} className={styles.button}>X</button>
                 </div>
			) : null}  */}
            {/* <img src="https://res.cloudinary.com/ezesortano/image/upload/v1708550298/images/idhh7ms7fef0borbmyfy.jpg" alt=""></img> 
            {
              
               typeAsadoParty? typeAsadoParty.map(el =><img src={el.image} alt=""></img>):""
            }
            */}
            
           
        
        
                
               
            {/* </div>
            
             <div className={styles.slidernav}>
                {/* <a href={props.id}></a>
                <a href={props.id}></a> */}
           
            
        </section >
        </>
    )
}

export default CardParrilla