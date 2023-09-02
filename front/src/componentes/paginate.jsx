import React from "react";
import styles from "./paginate.module.css";

const Paginate = (props) => {
    const pageNum = [];
    for (let i = 1; i <= Math.ceil(props.plates/props.platesPerPage); i++){
        pageNum.push(i)
    }
    return (
        <div className={styles.center}>
            <ul className={styles.pagination}>
            <button  onClick={() =>props.currentPage > 1 ? props.setCurrentPage(props.currentPage - 1) : props.currentPage} > Anterior</button> 
                {
                    
                    pageNum && pageNum.map(num => (  
                        <li key={num}>   
                            <button key={num} onClick={() => props.paginate(num)}
                            style={ num === props.currentPage ? { backgroundColor: 'green', color: 'black', border: '1px solid black'} : {}}
                            >{num}</button>                        
                        </li>      
                    ))
                }
            <button onClick={() =>props.currentPage === pageNum.length ? props.currentPage : props.setCurrentPage(props.currentPage + 1)} > Siguiente</button>
            </ul>
        </div>
    )
}

export default Paginate;