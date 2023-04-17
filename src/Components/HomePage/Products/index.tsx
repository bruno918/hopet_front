import api from "../../../config/api";
import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

interface Petshop {
  id: string;
  name: string;
  description: string;
  picture: string | null;
}

export const Petshops = () => {
  const [petshops, setPetshops] = useState<Petshop[]>([]);
  useEffect(() => {
    const fetchPetshops = async () => {
      api.get("/petshop").then((response) => {
        var resposta = response.data.slice(0, 3);
        setPetshops(resposta);
        console.log(resposta);
      });
    };
    fetchPetshops();
  }, []);

  return (
    <>
      <section id="petshop1" className="section-p1">
        <h2>Conheça os Nossos Parceiros</h2>
        <p>Os Melhores Petshops do Brasil</p>
        <div className="pro-container">
          {petshops.map((petshop) => (
            <div key={petshop.id} className="pro">
              {petshop.picture && (
                <img
                  src={petshop.picture}
                  className="PetHome1"
                  alt={petshop.name}
                />
              )}
              <div className="des">
                <h5>{petshop.name}</h5>
                <span>{petshop.description}</span>
              </div>
              <div className="linkDiv">
                <Link to={`/petshop/${petshop.id}`} className="aLink">
                  Conhecer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
