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

const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(
  <Provider store={store}>
    <BrowserRouter>
   
    <App />
   
    </BrowserRouter>
  </Provider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
