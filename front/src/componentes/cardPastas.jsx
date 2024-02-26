import React, { useEffect, useState} from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux"
import { deletePlate, getPlates } from "../actions/action";




const CardPastas = (props) => {
   
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    const plates= useSelector(state=>state.plate)
    const [state, setState] = useState(true)
    const dispatch = useDispatch();
    const typePastasParty = plates.filter(el => el.type.includes("Pastas party"))

    
    const onClose =  (id) => {
        dispatch(deletePlate(id))
        // dispatch(getPlates)
        setState(true ? false : true)
     
    }
   
    
    
  

    return(
        <>
        
        <section className={styles.contenedor}>
       
          <div className={styles.sliderwrapper}>
          
        
              <div className={styles.slider}>
              {/* { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <div> 
                    <button onClick={() => onClose(id)} className={styles.button}>X</button>
                 </div>
			) : null}  */}
            <img src="https://res.cloudinary.com/ezesortano/image/upload/v1708548425/images/vcx3us8om0v5hcbnteba.jpg" alt=""></img> 
            {
              
               typePastasParty? typePastasParty.map(el =><img src={el.image} alt=""></img>):""
            }
           
            
           
        
        
                
               
            </div>
            
             <div className={styles.slidernav}>
                {/* <a href={props.id}></a>
                <a href={props.id}></a> */}
           
             </div>
           </div>
        </section >
        </>
    )
}

export default CardPastas