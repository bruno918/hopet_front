import api from "../../../config/api";
import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  picture: string | null;
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      api.get("/petshop").then((response) => {
        var resposta = response.data;
        setProducts(resposta);
        console.log(resposta);
      });
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Conheça os Nossos Parceiros</h2>
        <p>Os Melhores Petshops do Brasil</p>
        <div className="pro-container">
          {products.map((product) => (
            <div key={product.id} className="pro">
              {product.picture && (
                <img
                  src={product.picture}
                  className="PetHome1"
                  alt={product.name}
                />
              )}
              <div className="des">
                <h5>{product.name}</h5>
                <span>{product.description}</span>
              </div>
              <div className="linkDiv">
                <Link to={`/petshop/${product.id}`} className="aLink">
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
