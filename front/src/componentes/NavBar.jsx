// import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
// import styles from "./navbar.module.css";
// import Profile from "./Profile";
// import { useAuth0 } from "@auth0/auth0-react";
// import LogoutButton from "./LogoutButton";
// import logo from "../imagen/zeta.jpg"
// import BurguerButton from "./burguer";
// import styled from "styled-components";



// export default function NavBar(){
//     const {loginWithRedirect, isAuthenticated, user} = useAuth0()
//     const [clicked, setClicked] = useState(false);
//     const handleClick = () => {
//       setClicked(!clicked)
//     }
//     useEffect(() => {
//       function handleResize() {
//         if (window.innerWidth > 768) {
//           setClicked(false);
//         }
//       }
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
//     return (
//       <>
        
//        <NavContainer>
            
//             <div className="logo">
//                     <img src={logo} alt=""/>
//             </div>
             
//                <div className={`links${clicked ? 'active' : ''}`}>  
//                <ul className="nav-menu">
//                <li className="nav-item"> 
//                   <a  href="/" className="nav-link"> <Link to='/home' > INICIO </Link> </a>
//                </li>

//                <li className="nav-item"> { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (<a  href="/"  className="nav-link"> <Link to='/create' > SUBIR PLATO </Link> </a>) : null} </li>
               
//                <li className="nav-item"> { isAuthenticated && user.name === 'Ezequiel Sortano'  ? (<a  href="/"  className="nav-link"> <Link to='/admin' > ADMIN </Link> </a>) : null} </li>
//                <li className="nav-item">
//                   <a   className="login" href="/">{isAuthenticated ? <LogoutButton/> :  <button className={styles.login} on onClick={() => loginWithRedirect()}>Iniciar sesion</button>}</a> 
//                </li>
//                </ul>
                 
                
                
                  
               
               
                
                 
               
//                </div>
                
                 
               
          
//            <div className="burguer">

//            <BurguerButton  clicked = {clicked} handleClick = {handleClick}/>
          
//            </div>
           
//            <BgDiv className = {`initial ${clicked ? 'active' : ''}`}></BgDiv>
//      </NavContainer>
//      </>
       
//     )
// }

// const NavContainer = styled.nav`
// ul{
//    padding-right:0px;;
// }
// .logo{
//       margin-left:0.8rem;
//       display: flex;
//       bottom: 40px;
//       margin-bottom: 0.5rem;
//       align-items:center;
//       font-size:1.2rem;
//       cursor:pointer;
//       border-radius: 50%;
//       overflow: hidden;
//       z-index:1;
//       @media(max-width:768px){
//          overflow: hidden;
//          display:flex;
//          margin:0px;
//          bottom: 40px;
//          justify-content: flex;
//          cursor:pointer;
//          border-radius: 50%;
//       }
     
// }
// .logo img{
   
//    width: auto;
//    height: 60px;
//    padding-left: 1px;
//    padding-top: 1px;
//    padding-bottom: 1px ;
//    padding-bottom: 1px;
//    transition: all 0.3s;
//    @media(max-width:768px){
      
//       width: auto;
//       height: 58px;
//       padding-left: 0px;
//       padding-top: 0px;
//       padding-bottom: 0px ;
//       padding-bottom: 0px;
//    }
  
// } 
// padding: 10px;
// padding-right:7rem;
// margin:auto;
// display:flex;
// flex-wrap:wrap;
// align-items:center;
// justify-content:space-between;
// background-color:#333;
// width:99%;
// height:70px;



// .nav-menu{
//    display:flex;
//    justify-content:space-between;
//    gap:40px;
//    height:100%;
//    overflow:hidden;
   
// }
// .login{
//   padding-top:0.8rem;
//   @media(max-width:768px){
//      display:none;
// }
// }
// a{
   
//    text-decoration: none;
//    }
 
// }
// .nav-item{
//    list-style-type:none;
   
// }


// .nav-link{
//    transition: 0.7s ease;
   
// }
// .nav-link:hover{
//    color: dodgerblue;
// }
// .links a{
//    display:flex;
//    justify-content:center;
//    align-items:center;
//    height:100%;
//    padding: 0.5rem;
//    color:#64b2ff;
//    font-family:sans-serif;
//    font-size:1rem;
//    font-wight:300;
//    cursor:pointer;
//    transition: 0.5s all ease;
//    padding-right:0px;
//    background-color:blue;
//    &:hover{
//       color:orange;
//       transition: 0.5s all ease;
//    }
//    @media(min-width:768px){
      
//       a{
//          font-size:1rem;
//          color:white;
//          display:block;
        
//       }
//       display:block;
//    }
//    @media(max-width:868px){
      
//        a{
         
//          display:none;
        
//       }
   
//    }
// }

// .linksactive{
//    top:70px;
//    .nav-menu{
//       width:100%;
//       height:90vh;
//       position:absolute;
//       justify-content:center;
//       flex-direction:column;
//       top:30px;
//       left: 0;
//       right: 0;
//       text-align:center;
//       align-items:center;
//       transition: all .5s ease;
//       color:orange;
//       :hover{
//          color:orange;
//          transition: all .5s ease;
//       }
//    }
//    .login{
//       display:block;
//       width:100%;
//       position:absolute;
//       justify-content:center;
//       flex-direction:column;
//       left: 0;
//       right: 0;
//       text-align:center;
//       align-items:center;
//       transition: all .5s ease;
//       margin-left:1.3rem;
//       margin-top:0px;
//    }
//    a{
//       font-size: 2rem;
//       margin-top: 1rem;
//       color:orange;
//       width:100%;
    
//    }
//    .nav-item{
//       width:100%;
//       height:70px;
//       display:flex;
//       justify-content:center;
//       align-items:center;
//    }
   
 
   
// }
// .burguer{
//    @media(min-width: 768px){
//       display:none;
//    }
  
// }
// `

// const BgDiv = styled.div`
// position: absolute;
// background-color: #222;
// top:-100%;
// left:-100%;
// width:100%;
// height:100%;
// transition: all .5s ease;
// &.active{
//    transition: all .5s ease;
//    width: 100%;
//    height:100%;
//    top:0;
//    left:0;
//    z-index:-1;
// }
// `