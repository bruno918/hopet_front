import React, { useEffect} from "react";
import logo from "../../img/hopet.svg";
import "./index.scss";
export const Footer = () => {
  useEffect(() => {
  const nav = document.getElementById("navbar");
  },[]);
  return (
  <>
    <footer className="section-p1">
      <div className="col">
        {/* <img className="logo" src={logo} /> */}
        <h4>Contato:</h4>
        <p>
          <strong>Endereço: </strong> {"R. Santos Dumont, 820 - Centro, Santa Rosa - RS, 98780-109 "}
        </p>
        <p>
          <strong>Telefone:</strong> {"(55) 996130563"}
        </p>
        <p>
          <strong>Atendimento:</strong> {""}
        </p>
      </div>
      <div/>
      <div className="col">
        <h4>Sobre:</h4>
          <a href="about">Sobre Nós</a>
          <a href="#">Politica de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="contact">Contatos</a>
      </div>
      <div className="col">
        <h4>Minha Conta:</h4>
        <a href="login">Login</a>
        <a href="signup">Criar Conta</a>
        <a href="perfil">Perfil</a> 
        <a href="inform">Seja um Parceiro</a>
      </div>
      {/* <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="img/pay/app.jpg" alt="" />
          <img src="img/pay/play.jpg" alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src="img/pay/pay.png" alt="" />
      </div> */}
      <div className="copyright">
        <p>© 2023 - Hopet</p>
      </div>
    </footer>
  </>
)};
        
        




