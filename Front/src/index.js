import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css'
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from 'react-dom/client'

const app = ReactDOMClient.createRoot(document.getElementById("app"))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

app.render(<App/>)