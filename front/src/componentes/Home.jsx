import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getPlates,  vaciarDetail} from "../actions/action";
import Card from "./card";
import styles from "./home.module.css";
import Paginate from "./paginate";
import SearchBar from "./searchBar";
import NavBar from "./NavBar";



export default function Home() {
    const dispatch = useDispatch();
    const plates= useSelector(state=>state.plate)
    const type = useSelector(state => state.types)
    const filtrados = useSelector(state => state.filtrados)


    


    const [currentPage, setCurrentPage] = useState(1);
    const [platesPerPage, setPlatesPerPage] = useState(12);
    const lastPlate = platesPerPage  * currentPage;
    const firstplate = lastPlate - platesPerPage;
    const currentPlates = plates.slice(firstplate, lastPlate) 
    const currentFiltro = filtrados.slice(firstplate, lastPlate)
    const [state, setState] = useState(1)
   
    useEffect(()=>{
        dispatch(getPlates()) 
        dispatch(vaciarDetail())
    },[dispatch])


   
    // function handlerOrderByTypes(e) {
    //     dispatch(orderByTypes(e.target.value))
    //     setCurrentPage(1);
    //     setState(state + 1)
    // }
  
    const paginate = (number) => {
        setCurrentPage(number)
    };

    function returnToFirstPage () {
        setCurrentPage(1)
    }
    return (
        
        <div className={styles.home}>
            {
               
            <div className={styles.filtros}>
                <SearchBar returnToFirstPage = {returnToFirstPage}/>
                <NavBar/>
            </div>
               
            
            }
            <div>
             
           
           
           
                {/* <Paginate 
                platesPerPage={platesPerPage}
                plates={plates?.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                /> */}
              
                <div className={styles.contenedor}>
                    {
                       
                   
                           currentPlates === 1? currentPlates.map( el => {
                            return <Card name={el.name} type={el.typeDiet} id={el.id} img={el.image} price={el.price} key={el.id} /> }):
                           currentFiltro.map( el => {
                            return <Card name={el.name} type={el.typeDiet} id={el.id} img={el.image} price={el.price} key={el.id} /> })
                        
                   }
                    
                    
                </div>
               
             </div>
            
        </div>
    )
}