import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing_page.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";

export default function LandingPage(){

    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return (
        <div className = {styles.landing}>
            <div className ={styles.div}>

            <Link to="/home" className={styles.link}>
                <button className={styles.button}>Home</button>
            </Link>
            { 
            isAuthenticated ? <LogoutButton/> :  <button on onClick={() => loginWithRedirect()}>Login</button>
            }
           
            
            <Profile/>
            </div>
        </div>
        
    )
}
