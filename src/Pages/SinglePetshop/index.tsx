import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Services } from "../../Components/SinglePetshop/Services";
import { useState, useEffect } from "react";
import { HeaderLogin } from "../../Components/HeaderLogin";
import { Prodetails } from "../../Components/SinglePetshop/Prodetails";
import { id } from "date-fns/locale";
export const SinglePetshop = () => {
  const [showComponent1, setShowComponent1] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setShowComponent1(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {showComponent1 ? <HeaderLogin /> : <Header />}
      <Prodetails />
      <Services />
      <Footer />
    </>
  );
};
