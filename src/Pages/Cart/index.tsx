import React from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Cart } from "../../Components/Cart/Cart";
import { CartAdd } from "../../Components/Cart/CartAdd";
import { CartHeader } from "../../Components/Cart/CartHeader";

export const CartPage = () => (
  <>
    <Header />
    <CartHeader />
    <Cart />
    <CartAdd />
    <Footer />
  </>
);
