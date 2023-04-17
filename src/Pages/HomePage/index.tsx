import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Banner } from "../../Components/HomePage/Banner";
import { Hero } from "../../Components/HomePage/Hero";
import { Petshops } from "../../Components/HomePage/Products/index";
import { HeaderLogin } from "../../Components/HeaderLogin";
import { useState, useEffect } from "react";
export const HomePage = () => {
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
      <Hero />
      <Petshops />
      <Banner />
      <Footer />
    </>
  );
};
