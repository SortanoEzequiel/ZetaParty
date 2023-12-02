import React from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";



export default function NavBar(){
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    return (
        <div>
             <ul className={styles.menu}>
                 <li><Link to='/home' className={styles.a}> Inicio </Link></li>
                 { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				 <li><Link to='/create' className={styles.a}> Subir Plato </Link></li>
			) : null} 
            </ul>
       <div className={styles.div}>
        <Profile/>
        { 
            isAuthenticated ? <LogoutButton/> :  <button on onClick={() => loginWithRedirect()}>Login</button>
        }
       </div>
        </div>
       
       
    )
}