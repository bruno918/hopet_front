import React from "react";
import { SignUp } from "../../Components/SignUp/Form";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { useState, useEffect } from "react";
import { HeaderLogin } from "../../Components/HeaderLogin";

export const SignUpPage = () => {
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

      <SignUp />
      <Footer />
    </>
  );
};
