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

function App() {
  const {pathname} = useLocation();

  return (
 
    <div>
      	  
      <Routes>
      
        <React.Fragment>
        
        
        <Route path="/" element = {<Home />} />
        
      
        <Route path = "/home" element = {<Home />}/>
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
