import React from "react";
import { LoginForm } from "../../Components/Login/LoginForm";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { HeaderLogin } from "../../Components/HeaderLogin";
import { useState, useEffect } from "react";

export const LoginPage = () => {
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
      <LoginForm />
      <Footer />
    </>
  );
};
