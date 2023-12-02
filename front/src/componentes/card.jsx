import React from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
const Card = (props) => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    return(
        <div className={styles.caja}>
               { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <div> 
                   <button>X</button> 
                 </div>
			) : null} 
            <div className={styles.img}>
            <img src={props.img} alt="" width="100%" height="150" /> 
            </div>
            <div className={styles.contenido}>
            <h2 className={styles.h4}>{props.name}</h2>
             <h2 className={styles.h4}>{props.type}</h2>  
             <Link to= {'/plate/' + props.id} className={styles.link}>
             <h3 className={styles.h4}>Detalle</h3>
             </Link>
             <h2 className={styles.h4}>${props.price}</h2>
            </div>
            

        </div>
    )
}

export default Card