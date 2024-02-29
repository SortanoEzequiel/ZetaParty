import React, { useEffect, useState} from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux"
import { deletePlate, getPlates } from "../actions/action";




const CardSalon = (props) => {
   
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    const plates= useSelector(state=>state.plate)
    const [state, setState] = useState(true)
    const dispatch = useDispatch();
    const typeSalonParty = plates.filter(el => el.type.includes("Salon + Catering"))

    
    const onClose =  (id) => {
        dispatch(deletePlate(id))
        // dispatch(getPlates)
        setState(true ? false : true)
     
    }
   
    
    
  

    return(
        <>
        
        <section className={styles.contenedorSalon}>
       

        <Link  className={styles.cardSalon} to="catering">
         
         <span>Salon + Catering</span>
         </Link>
          
              {/* { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <div> 
                    <button onClick={() => onClose(id)} className={styles.button}>X</button>
                 </div>
			) : null}  */}
            {/* <img src="https://res.cloudinary.com/ezesortano/image/upload/v1708550406/images/kjtuczbaaipjqaaora6h.jpg" alt=""></img> 
            {
              
               typeSalonParty? typeSalonParty.map(el =><img src={el.image} alt=""></img>):""
            } */}
           
            
           
        
        
                
               
           
        </section >
        </>
    )
}

export default CardSalon