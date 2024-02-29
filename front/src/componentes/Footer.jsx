import React from "react";
import style from "./Footer.module.css";
import logo from "../imagen/zeta.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
  <footer className={style.footer}>
      

       
          
            <div className={style.redes}>
              
                <a className={style.a} href="https://www.instagram.com/pizzaparty.lodezeta?igsh=MTdlMzY3czY0dDRpcA=="><FaInstagram style={{color:'white', fontSize:'40px'}}/></a> <a className={style.a} target= "_blank" href=" https://www.facebook.com/profile.php?id=100027756716099"><FaFacebook  style={{color:'white', fontSize:'40px'}}/></a>
             
            </div>
          
            <div className={style.presentacion}>
              {/* Somos un catering especializado en brindar party's shows únicos para todo tipo de eventos. */}
              <h1 className={style.h1}> Somos un catering especializado en brindar party's shows únicos para todo tipo de eventos. Contamos con 
              un equipo de profesionales con capacitación constate para llevarte las mejores experiencias en tu evento y con los destacacbles menúes. Utilizamos
              la maxima calidad en materia prima con el objetivo de brindar un producto de mayor calidad.</h1>
            </div>
      

  </footer>

    );
  };
export default Footer;
