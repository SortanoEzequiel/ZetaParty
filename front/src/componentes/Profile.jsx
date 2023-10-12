import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div>
        
            <h5>{user.name}</h5>
           
       
    </div>
        )
    )
}

export default Profile