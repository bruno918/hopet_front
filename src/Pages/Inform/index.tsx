import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Inform } from "../../Components/InformPage";
import { HeaderLogin } from "../../Components/HeaderLogin";
import { useState, useEffect } from "react";

export const InformPage = () => {
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
      <Inform />
      <Footer />
    </>
  );
};
