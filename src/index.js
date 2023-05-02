import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from "./pages/UserAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/user-auth" element={<UserAuth />} />
        </Routes>
    </BrowserRouter>,
);
