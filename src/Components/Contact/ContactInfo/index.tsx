import React from "react";
import "./index.css";
import Fachada from "../../../img/Contact/ContactInfo/Fachada.png";

const ContactInfo: React.FC = () => (
  <>
    <section id="contact-details" className="section-p1">
      <div className="details">
        <h2>Entre em contato com a Gente!</h2>
        <h3>Informações:</h3>
        <div>
          <ul>
            <li>
              <i className="fal fa-map"></i>
              <p>Santa Rosa</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>hopetoficial@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>55 996130563</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>De Segunda a Sexta, 9:00 às 18:00</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="map">
        <img
          width={600}
          height={450}
          className="Fachada"
          src={Fachada}
          alt=""
        />
      </div>
    </section>
  </>
);

export default ContactInfo;
