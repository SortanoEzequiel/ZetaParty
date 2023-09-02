import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTypes, postPlate, postPlates} from "../actions/action";
import styles from './plateCreate.module.css'

function validate(post) {
    let errors = {};

    if (post.name){
        if(post.name > 20) errors.name = 'El nombre debe tener menos de veinte caracteres';
    }else{ errors.name = 'Ingresar nombre del plato'}

    if(post.price){
        if(post.price <= 0) errors.price = 'El precio debe ser un valor positivo';
    }else{errors.price = 'Ingresar precio'}

    if(post.ingredients){
        if(post.ingredents <= 0 ) errors.ingredents = "Agregar ingredientes"
    }
    else{errors.ingredients = 'Agregar ingredientes'}

    if(!post.image){
      errors.image = 'Subir imagen del plato'
    }

    return errors;
}



export default function PlateCreate() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});


    const [post, setPost] = useState({
        price: 0,
        name: "",
        ingredients:[],
        image: "",
        typeDiet: "",
    })

    function handleInputChange(e) {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value
        }));
    };

    
    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
        else {
    console.log(post);
            dispatch(postPlate(post))
            alert('¡Platocreado!')
        }
    };

       

    return (
        <div className={styles.container}>
            <div className={styles.bkg} />
            <div className={styles.bkgcolor}>
                <div className={styles.form}>
                    <h1>Por favor, rellene todos los campos</h1>
                    <form onSubmit={e => handleSubmit(e)}>
                       
                        <div>
                            <label>Nombre del Plato</label>
                            <input type="text"  value={post.name} name='name' onChange={e => handleInputChange(e)} />
                            {errors.name && (
                                <p>{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label>Precio</label>
                            <input type="number" value={post.price} name='price' onChange={e => handleInputChange(e)} />
                            {errors.price&& (
                                <p>{errors.price}</p>
                            )}
                        </div>  
                           
                        <div>
                            <label>Imagen</label>
                            <input type="text"  value={post.image} name='image' onChange={e => handleInputChange(e)} />
                            {errors.image && (
                                <p>{errors.image}</p>
                            )}
                        </div> 
                        <div>
                            <label>Ingredientes</label>
                            <input type="array" value={post.ingredients} name='ingredients' onChange={e => handleInputChange(e)} />
                            {errors.ingredients&& (
                                <p>{errors.ingredients}</p>
                            )}
                        </div> 
                        <div>
                            <label>Tipo de dieta</label>
                            <input type="text"  value={post.typeDiet} name='typeDiet' onChange={e => handleInputChange(e)} />
                        </div> 
            
                                 
                        

                        <button type='submit' className={styles.createButton}>¡Crear!</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )                         
};