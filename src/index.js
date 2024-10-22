import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
