import { useParams } from "react-router-dom";
import api from "../../../config/api";
import { useEffect, useState } from "react";
import "./index.css";
import { Products } from "../../Shop/ShopProducts";
import { Link } from "react-router-dom";

interface Petshop {
  id: string;
  name: string;
  description: string;
  picture: string;
}
interface details {
  id: string;
  name: string;
  description: string;
  picture: string;
}

export const Prodetails = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<Petshop>();

  useEffect(() => {
    const fetchDetails = async () => {
      api.get(`/petshop/${id}`).then((response) => {
        var details = response.data;

        setDetails(details);
      });
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img
            className="PetShop"
            src={details?.picture}
            alt=""
            width="100%"
            id="MainImg"
          />
        </div>

        <div className="single-pro-details">
          <h2>{details?.name}</h2>

          <h4>Sobre</h4>
          <span>{details?.description}</span>
        </div>
      </section>
    </>
  );
};
