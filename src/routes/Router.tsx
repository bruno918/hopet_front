import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from "../Pages/AboutUs";
import { CartPage } from "../Pages/Cart";
import { Contact } from "../Pages/Contact";
import { HomePage } from "../Pages/HomePage";
import { InformPage } from "../Pages/Inform";
import { LoginPage } from "../Pages/LoginPage";
import { Parceiros } from "../Pages/Shop";
import { SignUpPage } from "../Pages/SignUpPage";
import { SinglePetshop } from "../Pages/SinglePetshop";
import { Scheduling } from "../Pages/Scheduling";
import { Logout } from "../Pages/logout";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/petshop/:id" element={<SinglePetshop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/inform" element={<InformPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/appointment/user/:id" element={<Scheduling />} />
      </Routes>
    </BrowserRouter>
  );
};
