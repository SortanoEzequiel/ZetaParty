import react from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./profile.module.css"

const Profile = () => {
    const { user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            
            <div className={styles.div}>
            <h5>{user.name}</h5>
          </div>
        )
    )
}

export default Profile