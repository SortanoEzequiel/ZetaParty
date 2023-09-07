import React from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 

const Card = (props) => {
    return(
        <div className={styles.caja}>
            
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