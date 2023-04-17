import React, { useEffect } from "react";
import "./index.css";
import logo from "../../img/hopet.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  useEffect(() => {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (bar) {
      bar.addEventListener("click", () => {
        if (nav) nav.classList.add("active");
      });
    }

    if (close) {
      close.addEventListener("click", () => {
        if (nav) nav.classList.remove("active");
      });
    }
  }, []);
  const id = localStorage.getItem("id");
  return (
    <>
      <section id="header">
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>

        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="/">
                Página Inicial
              </a>
            </li>
            <li>
              <a href="/parceiros">Parceiros</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
            <li>
              <a href="/signup">Criar conta</a>
            </li>
            <li>
              <Link to={`/appointment/user/${id}`}>Agendamento</Link>
            </li>

            {/* <li id="lg-bag">
              <a href="cart">
                <i className="far fa-shopping-bag"></i>
              </a>
            </li> */}
            <a href="#" id="close">
              <i className="far fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>
    </>
  );
};
