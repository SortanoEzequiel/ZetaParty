import React, { useEffect, useState} from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux"
import { deletePlate, getPlates } from "../actions/action";




const Card = (props) => {
   
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    const plates= useSelector(state=>state.plate)
    const [state, setState] = useState(true)
    const dispatch = useDispatch();
    
    const onClose =  (id) => {
        dispatch(deletePlate(id))
        dispatch(getPlates)
        setState(!state)
     
    }
    
    
    
    let id = props.id;
    return(
        <section className={styles.contenedor}>
       
          <div className={styles.sliderwrapper}>
          
        
              <div className={styles.slider}>
              { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <div> 
                    <button onClick={() => onClose(id)} className={styles.button}>X</button>
                 </div>
			) : null} 
                <img id="slide-1"  alt=""> {props.image}</img> 
                <img id="slide-2"   alt=""/> 
                <img id="slide-3"  alt="" /> 
            </div>
            
             <div className={styles.slidernav}>
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
             </div>
           </div>
        </section >

    )
}

export default Card