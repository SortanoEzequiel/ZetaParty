import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './actions/store';
import landingPage from './componentes/Landing_page';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createRoot} from "react-dom/client"
import {Auth0Provider} from "@auth0/auth0-react"

const domain = "dev-igk4x7y7053jssyr.us.auth0.com"
const id = "C8kKJvYJqAfEj7ex0dB5EqZPyOzOEeSU"



const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(
  <Provider store={store}>
    <BrowserRouter>

    <Auth0Provider
        domain={domain} 
        clientId={id} 
        redirectUri={window.location.origin}
       >

   
    <App />
    
    </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
