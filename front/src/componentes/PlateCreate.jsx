
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FormGroup, Input} from "reactstrap";
import { postPlate} from "../actions/action";
import styles from './plateCreate.module.css'
import uploadImage from "./uploadImage";
import NavBar from "./NavBar";
import Navbartres from "./nav";


function validate(post) {
    let errors = {};

    if (post.name){
        if(post.name > 20) errors.name = 'El nombre debe tener menos de veinte caracteres';
    }else{ errors.name = 'Ingresar nombre del plato'}

    if(post.price){
        if(post.price <= 0) errors.price = 'El precio debe ser un valor positivo';
    }else{errors.price = 'Ingresar precio'}

    if(post.description){
        if(post.ingredents <= 0 ) errors.ingredents = "Agregar ingredientes"
    }
    else{errors.description = 'Agregar ingredientes'}

    if(!post.image){
      errors.image = 'Subir imagen del plato'
    }

    return errors;
}





export default function PlateCreate() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    
    const types = ["Pizza party","Asado/Parrillero","Mila party","Tacos party","Pastas party","Salon + Catering"]
 


    const [post, setPost] = useState({
        price: 0,
        name: "",
        description:"",
        image: "",
        type: [],
    })
   
   

   const  handleInputChange = async(e)  => {
        if(e.target.name=== "image"){
            let imageUrl = await uploadImage(e.target.files[0])
            console.log(imageUrl);
            setErrors(validate({
                ...post,
                image: imageUrl
            }));
            setPost({...post, image: imageUrl});
        }else{
            setPost({
                ...post,
                [e.target.name]: e.target.value
            });
            setErrors(validate({
                ...post,
                [e.target.name]: e.target.value
            }));
        }
       
    };

   function handleSelectType(e){
   if(!post.type.includes(e.target.value))
   setPost({
   ...post,
    type:[...post.type, e.target.value]})
   }

    
    function handleSubmit(e) {
    //     e.preventDefault();
    //     if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
    //     else {
    // console.log(post);
            dispatch(postPlate(post))
            alert('¡Platocreado!')
            setPost({
                price: 0,
                name: "",
                description:"",
                image: "",
                type: "",
            })
        // }
    };

       

    return (
       <>
       <div><Navbartres/></div>
        <div className={styles.container}>
            
            <div className={styles.bkg} />
            <div className={styles.bkgcolor}>
                <div className={styles.form}>
                    <h1>Rellenar campos</h1>
                    <form onSubmit={e => handleSubmit(e)}>
                       
                        <div>
                            <label>Plato</label>
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
                          <input
                             type="file"
                             id = "image"
                             name="image"
                             onChange={e => handleInputChange(e)}/>
                         
                            {errors.image && (
                                <p>{errors.image}</p>
                            )}
                        </div> 
                        <div>
                            <label>Descrip.</label>
                            <input type="text" value={post.description} name='description' onChange={e => handleInputChange(e)} />
                            {errors.description&& (
                                <p>{errors.description}</p>
                            )}
                        </div> 
                        <div>
                            <label></label>
                            <input type="text"  value={post.type} name='type' onChange={e => handleInputChange(e)} />
                            {errors.type && (
                                <p>{errors.type}</p>
                            )}
                             <select onChange={e => handleSelectType(e)}value='default'
                            className={styles.Select}>
                                <option value="default" disabled className={styles.Option}>Party</option>
                                {
                                    types && types.map(d => (
                                        <option value={d.types} key={d} className={styles.Option}>{d}</option>
                                    ))
                                }
                            </select>
                        </div> 
            
                                 
                        
                         <div className={styles.buttoncontent}>
                        <button type='submit' className={styles.createButton}>¡Crear!</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )                         
};