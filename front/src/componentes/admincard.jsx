import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FormGroup, Input} from "reactstrap";
import { postPlate} from "../actions/action";
import styles from './admin.module.css'
import uploadImage from "./uploadImage";
import NavBar from "./NavBar";
import Navbartres from "./nav";
import { updateProduct } from "../actions/action";
import { deletePlate, getPlates } from "../actions/action";
import {useNavigate} from 'react-router-dom';
import GridLoader from "react-spinners/ClipLoader";

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




export default function Admincard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [stat, setStat] = useState(false)
    const types = ["Pizza party","Asado/Parrillero","Mila party","Tacos party","Pastas party","Viandas", "Salon + Catering"]
 
    const [name, setName] = useState(props.name);
	const [price, setPrice] = useState(props.price);
	const [type, setType] = useState(props.type);
	const [image, setImage] = useState(props.image);
    const [description, setDescription] = useState(props.description)
    const [id, setId] = useState(props.id)
    

     function onClose  (id) {
        dispatch(deletePlate(id))
        alert("Plato eliminado")
        window.location.reload()
        // setTimeout(() => {
        //   setStat(!stat)
        // }, 1000)
        
    }
   

  
    useEffect(()=>{
        dispatch(getPlates()) 
      
    },[dispatch])

    const  handleInputChange = async(e)  => {
        if(e.target.name === "image"){
            let imageUrl =  await uploadImage(e.target.files[0])
            setImage(imageUrl);
        }
    };
   
    
   

  
   

    
    function handleSubmit(e) {
        e.preventDefault();

        const post = {
            id,
            name,
            price,
            description,
            image,
            type,
        }

            dispatch(updateProduct(post)) 
            alert('Plato editado');
            window.location.reload()
    };

   
   

    return (
       <>
       
      
      <div className={styles.container}>
            
            <div className={styles.bkg} />
            <div className={styles.bkgcolor}>
                <div >
                    <h1>Editar/Borrar</h1>
                    <button  className={styles.button} onClick={() => onClose(id)} >Eliminar menú</button>
                    <form onSubmit={e => handleSubmit(e)} className={styles.forms}>
                   
                        <div>
                            <label>
                           Plato:
                            <input type="text" 
                             value={name}
                             onChange={(event) => setName(event.target.value)}
                            />
                           </label>
                           
                        </div>

                        <div>
                            <label>
                            Precio:
                            <input type="text"
                             value={price} 
                             onChange={(event) => setPrice(event.target.value)} 
                             />
                           </label>
                        </div>  
                           
                        <div>
                        <label>Imagen
                          <input
                             type="file"
                             id = "image"
                             name="image"
                             onChange={e => handleInputChange(e)}/>
                        </label>
                        </div> 
                        <div>
                          <label>
                            Ingred.
                            <input type="text" 
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)} />
                           
                            </label> 
                        </div> 
                        <div>
                        <label className={styles.formLabel}>
                        <input type="text" 
                            value={type} 
                
                        />
						<select
                            defaultValue='default'
                            className={styles.filtro}
							onChange={(event) => setType(event.target.value)}
						>
							<option  defaultValue = "default" >{type}</option>
							{types?.map((e) => {
								return (
									<option value={e} key={e} >
										{e}
									</option>
								);
							})}
						</select>
					</label>
                        </div> 
                         <div className={styles.buttoncontent}>
                        <button type='submit' className={styles.createButton}>¡Guardar Cambios!</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
       
        
        </>
    )                         
};




// import styles from "./admin.module.css";
// import {useDispatch, useSelector} from "react-redux"
// import React, { useEffect, useState} from "react";
// import {getPlates,  vaciarDetail} from "../actions/action";
// import { useLocation } from "react-router-dom";
// import CardMilaFilter from "./cardMilaFilter";
// import Navbartres from "./nav";
// import { deletePlate } from "../actions/action";
// import { updateProduct } from "../actions/action";













// const Admincard = (props) => {
   
//     const dispatch = useDispatch();

//     const [stat, setStat] = useState(false)
    
   
//     const onClose =  (id) => {
//             dispatch(deletePlate(id))
//             setTimeout(()=> {setStat(!stat)},1000)
//     }



//     useEffect(()=>{
//         dispatch(getPlates())
//     },[dispatch])
   
     
    
//     let id = props.id
//     return(
//         <>
        
//          <div className={styles.cardFilters}>
     
//                 <div className={styles.divimg}>
//                 <img src={props.image} alt="" ></img>
//                 </div>
//                 <h4>{props.name}</h4>
                
                
//                 <p>{props.description}.</p>
                
//                 <h2>${props.price}</h2>
                
//                 <button  className={styles.button} onClick={() => onClose(id)} >Eliminar menú</button>
//          </div>
       
//         </>
//     )
// }

// export default Admincard