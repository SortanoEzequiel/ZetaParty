import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import logo from "../imagen/zeta.jpg"
import BurguerButton from "./burguer";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";





  
    
export default function NavBar(){
    const {loginWithRedirect, isAuthenticated, user} = useAuth0()
    
    

   
  

    return (
      <>
        
       <NavContainer>
            
            <div className="logo">
                    <img src={logo} alt=""/>
            </div>
             

       
             <ul className="nav-menu">
               <li className="nav-item"> 
                  <a  href="/" className="nav-link"> <Link to='/home' > Inicio </Link> </a>
               </li>

               <li className="nav-item"> { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (<a  href="/"  className="nav-link"> <Link to='/create' > Subir Plato </Link> </a>) : null} </li>
               
               <li className="nav-item"> { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (<a  href="/"  className="nav-link"> <Link to='/admin' > Admin </Link> </a>) : null} </li>
               <li className="nav-item">
                  <a   className="nav-link" href="/">{isAuthenticated ? <LogoutButton/> :  <button className={styles.login} on onClick={() => loginWithRedirect()}>Iniciar sesion</button>}</a> 
               </li>
             </ul>
          <a  clasName="menu" href="">
         <div clasName="burguer">
         <BurguerButton/>      
         </div> 
         </a>
        
           {/* <div className="overlay" id="mobile-menu">
            <a  href="" clasName="close">&times;</a>
            <div clasName="overlay-content">
              <a  href="/" className="nav-link"> <Link to='/home' > Inicio </Link> </a>
              { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (<a  href="/"  className="nav-link"> <Link to='/create' > Subir Plato </Link> </a>) : null}
              { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (<a  href="/"  className="nav-link"> <Link to='/admin' > Admin </Link> </a>) : null}
              <a   className="nav-link" href="/">{isAuthenticated ? <LogoutButton/> :  <button className={styles.login} on onClick={() => loginWithRedirect()}>Iniciar sesion</button>}</a>
            </div>
           </div> */}
           
     </NavContainer>
    
     </>
       
    )
}

const NavContainer = styled.nav`
padding: 10px 30px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:#333;
width:95%;
height:70px;

.nav-menu{
   display:flex;
   justify-content:space-between;
   gap:60px;
   padding-right:0px;
   overflow:hidden;
  
}
a{
   color: white;
   text-decoration: none;
 
}

.nav-item{
   list-style-type:none;
}


.nav-link{
   transition: 0.7s ease
}

.nav-link:hover{
   color: dodgerblue;
}



.bar{
   display:block;
   width:25px;
   height:3px;
   margin:5px auto;
   -webkit-transition: all 0.3s ease-in-out;
   transition: all 0.3s ease-in-out;
   background-color: white;
}
@media(max-width:768px){
.hamburguer{
   display:block;
}
.hambuerguer.active .bar:nth-child(2){
   opacity:0
}
.hambuerguer.active .bar:nth-child(1){
   transform: translateY(8px) rotate(45deg);
}
.hambuerguer.active .bar:nth-child(3){
   transform: translateY(-8px) rotate(-45deg);
}
.nav-menu{
   position:fixed;
   left:-100%;
   top: 70px;
   gap: 0;
   flex-direction:column;
   background-color: #262626;
   width: 100%;
   text-align: center;
   transition: 0.3s;

}
.nav-item{
   margin: 16px 0;
}

.nav.menu.active{
   left:0;
}
}

.icon{
   display:none;
}
.icon i{
   color:#fff;
   font-size:30px;
   
}
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
   
   width: 78px;
   height: 60px;
   border-radius: 50%;
   padding-left: 1px;
   padding-top: 1px;
   padding-bottom: 1px ;
   padding-bottom: 1px;
   transition: all 0.3s;
   @media(max-width:768px){
      
      z-index:2;
      width: 78px;
      height: 70px;
      border-radius:50%;
   }
  
} 

@media (max-width:700px){
   width:90%;
   .icon{
      display:block;
   }
   .nav-menu{
    display:none;
   }
   .links.active{
      display:flex;
      height:400px;
      @media(max-width:768px){
         .a{
            display:block;
            gap:20px;
            padding-right:90px;
            overflow:hidden;
         }

      }
   }

   
}

// .navbar_a__CLoxg{
//    width: 120px;
//    height: 25px;
//    position:absolute;
  
// }
// .links{
//    width:500px;
//    position:relative;
//    top:-100px;
//    left:-2000px;
//    right:0;
   
//    text-align:center;
//    transition: all .5s ease;
//    display:flex;
//    justify-content:flex-start;
//    align-items: center;
//    z-index:2;
//    a{
//       color:white;
//       font-size:2rem;
//       display:block;
//    }
//    @media(min-width:768px){
//       position:initial;
//       margin:0;
      
//       a{
//          font-size:1rem;
//          color:white;
//          display:inline;
        
//       }
//       display:block;
//    }
// }
// .links.active{
//    width:100%;
//    display:block;
//    position:absolute;
//    margin-left:auto;
//    margin-right:auto;
//    top:30%;
//    left: 0;
//    right: 0;
//    text-align:center;
//    justify-content:center;
//    a{
//       font-size: 2rem;
//       margin-top: 1rem;
//       color: white;
     
//    }
//    .navbar_a__CLoxg{
//       position:absolute;
//       display:inline-block;
//       right: 35%;
      
//    }
 
   
// }

// `



// `
