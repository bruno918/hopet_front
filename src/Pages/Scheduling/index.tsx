import React from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { SchedulingC } from "../../Components/Scheduling";
import { useState, useEffect } from "react";
import { HeaderLogin } from "../../Components/HeaderLogin";

export const Scheduling = () => {
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

      <SchedulingC />
      <Footer />
    </>
  );
};
