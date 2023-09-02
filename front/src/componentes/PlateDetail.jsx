import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useParams } from 'react-router';
import { getDetail, getTypes } from '../actions/action';
import styles from "./plateDetail.module.css";


export default function PlateDetail(){
    const dispatch = useDispatch();
    const { id } = useParams();
    const plateDetail = useSelector(state => state.plateDetail)
    const [tipo,settipo] = useState([])
    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id])
    console.log(plateDetail);
 

    


return(
    <div className={styles.div}>
       
        {
      
      
            <div  > 
                    <h1 className={styles.name}>{plateDetail.name}</h1>
                    <div className={styles.img}> 
                    <img src={plateDetail.image} alt="" width="420px" height="250px" border="solid"/>
                    </div> 
                    <h1 className={styles.name}>Precio: ${plateDetail.price} </h1> 
                    <h1 className={styles.name}>ingredientes: {plateDetail.ingredients} </h1>
                    <h1 className={styles.name}>Tipo de dieta: {plateDetail.typeDiet}</h1>       
             </div>
        
        }
    </div>
)
};  
