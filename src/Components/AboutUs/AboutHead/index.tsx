import React from "react";
import "./index.css";
import HeadAbout from "../../../img/AboutUs/AboutHead/HeadAbout.jpg";

export const AboutHead = () => (
  <>
    <section id="about-head" className="section-p1">
      <img className="HeadAbout" src={HeadAbout} alt="" role="presentation" />
      <div>
        <h2>Quem Somos Nós?</h2>
        <p>
          Somos uma empresa focada em facilitar a vida de quem possui um animal de estimação, trazendo ao dono a facilidade de encontrar um Petshop perto da sua residencia e com o melhor cuidado com o seu Pet.
          Dessa forma junto com os nossos parceirsos oferecemos a possibilidade de você agendar uma consulta venterinária, ou até mesmo um banho e ainda uma tosa, oferecemos tudo isso através do nosso site, podendo até mesmo verificar os horários disponiveis dos Petshops.

        </p>
        
      </div>
    </section>
  </>
);
