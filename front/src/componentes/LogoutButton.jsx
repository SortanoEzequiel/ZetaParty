import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./logout.module.css"

const LogoutButton = () => { 
    const { logout } = useAuth0()
    return (
        
        <div className={styles.div}>
            <button  className={styles.logout} onClick={() => logout()}>
                Cerrar sesion
            </button>
        </div>
    )
}

export default LogoutButton