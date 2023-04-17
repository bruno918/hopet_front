//faz uma pagina de logout q limpa o localstorage e redireciona pra home
import React, { useEffect } from "react";

export const Logout = () => {
  useEffect(() => {
    localStorage.clear();
    window.location.href = "/";
  }, []);

  return <div></div>;
};
