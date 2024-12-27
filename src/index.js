import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from './store/auth';
ReactDOM.createRoot(document.querySelector("#root")).render(
    <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthProvider>
);
