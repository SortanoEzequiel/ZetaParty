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
    const typePizzaParty = plates.filter(el => el.type.includes("Pizza party"))

    console.log("caed",typePizzaParty);
    const onClose =  (id) => {
        dispatch(deletePlate(id))
        // dispatch(getPlates)
        setState(true ? false : true)
     
    }
   
    
    
  

    return(
        <>
        
        <section className={styles.contenedor}>
           <Link  className={styles.cardPizza} to="/pizzaparty">
          
           <span>Pizza Party</span>
           </Link>
          {/* <div className={styles.sliderwrapper}>
          
        
              <div className={styles.slider}> */}
              {/* { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <div> 
                    <button onClick={() => onClose(id)} className={styles.button}>X</button>
                 </div>
			) : null}  */}
           
            {/* <img src="https://res.cloudinary.com/ezesortano/image/upload/v1708417889/images/aguzjgjkkyuzdywhtppv.jpg"alt="Pizza party"></img> 
            
            {
              
               typePizzaParty ? typePizzaParty.map(el =><img src={el.image} alt=""></img>):""
            } */}
           
            
           
        
        
                
               
            {/* </div> */}
            
             {/* <div className={styles.slidernav}>
                {/* <a href={props.id}></a>
                <a href={props.id}></a> */}
           
        
           {/* </div> */}
        </section >
        </>
    )
}

export default Card