import React from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ContactHeader } from "../../Components/Contact/ContactHeader";
import ContactInfo from "../../Components/Contact/ContactInfo";
import { HeaderLogin } from "../../Components/HeaderLogin";
import { useState, useEffect } from "react";

export const Contact = () => {
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
      <ContactHeader />
      <ContactInfo />
      <Footer />
    </>
  );
};
