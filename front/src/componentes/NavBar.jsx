import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import logo from "../imagen/zeta.jpg"
import BurguerButton from "./burguer";
import styled from "styled-components";



export default function NavBar(){
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked)
    }
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 768) {
          setClicked(false);
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
      <>
        
       <NavContainer>
            
            <div className="logo">
                    <img src={logo} alt=""/>
            </div>
             
               <div className={`links ${clicked ? 'active' : ''}`}>  

                 <a onClick={handleClick} href="/"> <Link to='/home' > Inicio </Link> </a>
                
                 {/* <a onClick={handleClick} href="/"> Nosotros </a> */}
                 { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (
				<a onClick={handleClick} href="/"> <Link to='/create' > Subir Plato </Link> </a>
			) : null} 
                <a  className={styles.a} href="/">
           {isAuthenticated ? <LogoutButton/> :  <button className={styles.login} on onClick={() => loginWithRedirect()}>Iniciar sesion</button>}
           </a>     
               
               
                 
                 
               
               </div>
                
                 
               
          
           <div className="burguer">

           <BurguerButton  clicked = {clicked} handleClick = {handleClick}/>
          
           </div>
           
           <BgDiv className = {`initial ${clicked ? 'active' : ''}`}></BgDiv>
     </NavContainer>
     </>
       
    )
}

const NavContainer = styled.nav`
.logo{
      margin-left:20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      bottom: 40px;
      cursor:pointer;
      border-radius: 50%;
     
}
.logo img{
   z-index: 2;
   width: auto;
   height: 60px;
   padding-left: 1px;
   padding-top: 1px;
   padding-bottom: 1px ;
   padding-bottom: 1px;
   transition: all 0.3s;
  
} 
padding: .4rem;
background-color:#333;
display:flex;
align-items:center;
justify-content:space-between;
// height:4rem;
a{
   margin-left:0px;
   margin-right:20px;
   font-weight: 700;
   padding:0px 10px;
   border:none;
   color: black;
   text-decoration: none;
   font-size: 18px;
   text-decoration: none;
   align-items:center;
   display:inline-block;
   justify-content:space-between;
   align-items: center;
   
}

.navbar_a__CLoxg{
   width: 120px;
   height: 25px;
   position:absolute;
}
.links{
   width:500px;
   position:relative;
   top:-100px;
   left:-2000px;
   right:0;
   
   text-align:center;
   transition: all .5s ease;
   display:flex;
   justify-content:flex-start;
   align-items: center;
   a{
      color:white;
      font-size:2rem;
      display:block;
   }
   @media(min-width:768px){
      position:initial;
      margin:0;
      a{
         font-size:1rem;
         color:white;
         display:inline;
      }
      display:block;
   }
}
.links.active{
   width:100%;
   display:block;
   position:absolute;
   margin-left:auto;
   margin-right:auto;
   top:30%;
   left: 0;
   right: 0;
   text-align:center;
   a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
   }
   .navbar_a__CLoxg{
      position:absolute;
      display:inline-block;
      right: 35%;
      
   }
 
   
}
.burguer{
   @media(min-width: 768px){
      display:none;
   }
}
`

const BgDiv = styled.div`
position: absolute;
background-color: #222;
top:-1000px;
left:-1000px;
width:100%;
height:100%;
z-index:-1;
transition: all .6s ease;
&.active{
   transition: all .6s ease ;
   border-radius:0 0 80% 0;
   width: 100%;
   height:100%;
   top:0;
   left:0;
}

`
