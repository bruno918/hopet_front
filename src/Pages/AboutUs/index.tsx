import React, { useState, useEffect } from "react";
import { AboutHead } from "../../Components/AboutUs/AboutHead";
import { AboutHeader } from "../../Components/AboutUs/AboutUs";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { HeaderLogin } from "../../Components/HeaderLogin";

export const AboutUs = () => {
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
      <AboutHeader />
      <AboutHead />
      <Footer />
    </>
  );
};
