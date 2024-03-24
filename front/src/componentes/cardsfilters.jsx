
import styles from "./card.module.css";
import {useDispatch, useSelector} from "react-redux"
import React, { useEffect, useState} from "react";
import {getPlates,  vaciarDetail} from "../actions/action";
import { useLocation } from "react-router-dom";
import CardMilaFilter from "./cardMilaFilter";
import Navbartres from "./nav";

const CardFilters = (props) => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const plates= useSelector(state=>state.plate)
    const type = useSelector(state => state.types)
    const filtrados = useSelector(state => state.filtrados)
    

    console.log(pathname);


   
   
    const typePizzaParty = plates.filter(el => el.type.includes("Pizza party"))
    const typeAsadoParty = plates.filter(el => el.type.includes("Asado/Parrillero"))
    const typeMilaParty = plates.filter(el => el.type.includes("Mila party"))
    const typeTacosParty = plates.filter(el => el.type.includes("Tacos party"))
    const typePastasParty = plates.filter(el => el.type.includes("Pastas party"))
    const typeViandasParty = plates.filter(el => el.type.includes("Viandas"))
    const typeSalonParty = plates.filter(el => el.type.includes("Salon"))
    // ["Pizza party","Asado/Parrillero","Mila party","Tacos party","Pastas party","Salon + Catering"]
    console.log("tacos",typeViandasParty);


    useEffect(()=>{
        dispatch(getPlates())
    },[dispatch])
   
     
    
   
    return(
        <>
         <div><Navbartres/></div>
        <div className={styles.contenedorFilters}>
            {
                pathname.includes('/milaparty') ? (
                    typeMilaParty ? typeMilaParty.map( el => {
                return <CardMilaFilter name={el.name} price={el.price} description={el.description} type={el.type} id={el.id} image={el.image} key={el.id} /> }): null
                 ) :  pathname.includes('/parrillaParty') ? (
                    typeAsadoParty ? typeAsadoParty.map( el => {
                return <CardMilaFilter name={el.name} type={el.type} price={el.price}  description={el.description} id={el.id} image={el.image} key={el.id} /> }): null
                 ) :  pathname.includes('/pizzaparty') ? (
                    typePizzaParty ? typePizzaParty.map( el => {
                return <CardMilaFilter name={el.name} type={el.type} price={el.price}  description={el.description} id={el.id} image={el.image} key={el.id} /> }): null
                 ) : pathname.includes('/tacosparty') ? (
                    typeTacosParty ? typeTacosParty.map( el => {
                return <CardMilaFilter name={el.name} type={el.type} price={el.price}  description={el.description} id={el.id} image={el.image} key={el.id} /> }): null
                 ) : pathname.includes('/pastasparty') ? (
                    typePastasParty ? typePastasParty.map( el => {
                return <CardMilaFilter name={el.name} type={el.type} price={el.price} description={el.description} id={el.id} image={el.image} key={el.id} /> }): null
                 ) : pathname.includes('/viandas') ? (
                    typeViandasParty ? typeViandasParty.map( el => {
                return <CardMilaFilter name={el.name} type={el.type} price={el.price} description={el.description} id={el.id} image={el.image} key={el.id} /> }): null
                 ) : null
            }    
        </div >
        </>
    )
}

export default CardFilters;