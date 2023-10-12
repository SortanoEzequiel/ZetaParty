import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './componentes/Home';
import LandingPage from './componentes/Landing_page';
import NavBar from './componentes/NavBar';
import PlateDetail from './componentes/PlateDetail';
import PlateCreate from './componentes/PlateCreate';

function App() {
  
  return (
 
    <div>
      <Routes>
      
        <React.Fragment>
        
        
        <Route path="/" element = {<LandingPage />} />
        
      
        <Route path = "/home" element = {<Home />}/>
        <Route path = "/create" element = {<PlateCreate />}/>
        <Route path = "/plate/:id" element = {<PlateDetail />}/> 
        
        </React.Fragment>
      </Routes>
    </div>
  
  );
}

export default App;
