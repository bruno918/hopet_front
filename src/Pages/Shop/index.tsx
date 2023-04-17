import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { PageHeader } from "../../Components/Shop/PageHeader";
import { Pagination } from "../../Components/Shop/Pagination/index.";
import { Products } from "../../Components/Shop/ShopProducts";
import { useState, useEffect } from "react";
import { HeaderLogin } from "../../Components/HeaderLogin";

export const Parceiros = () => {
  const [showComponent1, setShowComponent1] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setShowComponent1(true);
    }
  }, []);

  return (
    <>
      {showComponent1 ? <HeaderLogin /> : <Header />}
      <PageHeader />
      <Products />
      <Pagination />
      <Footer />
    </>
  );
};
