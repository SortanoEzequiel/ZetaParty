import './App.css';
import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './componentes/Home';
import LandingPage from './componentes/Landing_page';
import NavBar from './componentes/NavBar';
import PlateDetail from './componentes/PlateDetail';
import PlateCreate from './componentes/PlateCreate';
import WhatsApp from "./componentes/WhatsApp";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./componentes/home.module.css"
import CardMilaFilter from './componentes/cardMilaFilter';
import PlateFilter from './componentes/cardMilaFilter';
import CardFilters from './componentes/cardsfilters';
import Salon from './componentes/salon';
import Admin from './componentes/admin';
function App() {
  const {pathname} = useLocation();

  return (
 
    <div className={styles.cont}>
      	  
      <Routes>
        
        <React.Fragment>
        
        
        <Route path ="/" element = {<Home />} />
        <Route path = "/admin" element = {<Admin/>}/>
        <Route path = "/home" element = {<Home />}/>
        <Route path='/milaparty' element = {<CardFilters/>}/>
        <Route path='/parrillaParty' element = {<CardFilters/>}/>
        <Route path='/pizzaparty' element = {<CardFilters/>}/>
        <Route path='/tacosparty' element = {<CardFilters/>}/>
        <Route path='/pastasparty' element = {<CardFilters/>}/>
        <Route path='/viandas' element = {<CardFilters/>}/>
        <Route path="/catering" element = {<Salon/>}/>
        <Route path = "/create" element = {<PlateCreate />}/>
        <Route path = "/plate/:id" element = {<PlateDetail />}/> 
        
        </React.Fragment>
      </Routes>
      { pathname.split('/')[1] !== 'create' ? (
				<WhatsApp />
			) : null}
    </div>
  
  );
}

export default App;
