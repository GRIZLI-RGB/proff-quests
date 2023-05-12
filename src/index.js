import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from './theme';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider>
        <BrowserRouter>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </BrowserRouter>
    </HelmetProvider>,
);