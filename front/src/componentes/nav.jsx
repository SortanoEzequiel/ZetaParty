import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import { GrRestaurant } from "react-icons/gr";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
  FaUtensils,  
  FaProcedures,

} from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../imagen/zeta.jpg" 
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const name = eze
const Navbartres = () => {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {loginWithRedirect, isAuthenticated, user} = useAuth0()
  return (

    <>
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <div className="logo">
                    <img src={logo} alt=""/>
            </div>
            {/* <p></p>
            <p>Lo de Zeta</p> */}
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  <a  href="/" > <Link to='/home' > INICIO </Link> </a>
                </div>
              </MenuItemLink>
            </MenuItem>
            { isAuthenticated && user.name === 'Ezequiel Sortano' ? (
                    <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}><div>
                                       
                   <FaUtensils/>
                      
                    <a  href="/"  className="nav-link"> <Link to='/create' > SUBIR PLATO </Link> </a>
                      </div>
                      </MenuItemLink>
            </MenuItem>) : null}
    
               

               
               
         { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
          <MenuItem>
          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}><div>
          <FaBriefcase />
          <a  href="/"  className="nav-link"> <Link to='/admin' > ADMIN </Link> </a>
          </div>
          </MenuItemLink>
            </MenuItem>) : null}
            


          
                  
                
                
            
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                <FaUserAlt /> 
                <a    href="/">{isAuthenticated ? <LogoutButton/> : <button className="login" onClick={() => loginWithRedirect()}> Iniciar sesion</button>}</a>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
    </>
  );
};



export default Navbartres;
