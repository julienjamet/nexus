/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import ReactDOM from 'react-dom/client';
import React from 'react';
/****************************************************/

/*********************************************STYLES*/
import './styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
/****************************************************/

/*****************************************COMPONENTS*/
import { App } from './App';
/****************************************************/
/************************************************************************/


/*******************************************************************ROOT*/
const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
/************************************************************************/