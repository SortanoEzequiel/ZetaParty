import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getPlates,  vaciarDetail} from "../actions/action";
import Card from "./cardPizza";
import styles from "./home.module.css";
import Paginate from "./paginate";
import SearchBar from "./searchBar";
import NavBar from "./NavBar";
import  {deletePlate}  from "../actions/action";
import imgHome from "../imagen/home4.jpeg"
import CardParrilla from "./cardParrilla";
import CardMila from "./cardMila";
import CardTacos from "./cardTacos";
import CardPastas from "./cardPastas";
import CardSalon from "./cardSalon";
import Footer from "./Footer";
import CardViandas from "./cardViandas";


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
   
    const typePizzaParty = currentPlates.filter(el => el.type.includes("Pizza party"))
    const typeAsadoParty = currentPlates.filter(el => el.type.includes("Asado"))
    const typeMilaParty = currentPlates.filter(el => el.type.includes("Mila party"))
    const typeTacosParty = currentPlates.filter(el => el.type.includes("Tacos"))
    const typePastasParty = currentPlates.filter(el => el.type.includes("Pastas"))
    const typeSalonParty = currentPlates.filter(el => el.type.includes("Salon"))
    // ["Pizza party","Asado/Parrillero","Mila party","Tacos party","Pastas party","Salon + Catering"]
    useEffect(()=>{
        dispatch(getPlates()) 
        dispatch(vaciarDetail())
    },[dispatch])

    console.log(typePizzaParty);
   
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
        <>
        <NavBar/>
        <div className={styles.cont}>
            <div className={styles.card}>
            <Card/>
            <CardParrilla/>
            <CardMila/>
            <CardTacos/>
            <CardPastas/>
            <CardViandas/>
            <CardSalon/>
            
            </div>
          <div className={styles.about}>
            <Footer/>
          </div>
            
            
        </div>
        </>
    )
}
