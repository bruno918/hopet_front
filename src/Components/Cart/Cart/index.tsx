import React from "react";
import "./index.css";
export const Cart = () => (
  <>
    <section id="cart" className="section-p1">
      <table width="100%">
        <thead>
          <tr>
            <td>Remover</td>
            <td>Produto</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Valor total</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <a href="#">
                <i className="far fa-times-circle"></i>
              </a>
            </td>
            <td>Tosa</td>
            <td>R$40</td>
            <td>
              <input type="number" value="1" name="" id="" />
            </td>
            <td>R$40,00</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <i className="far fa-times-circle"></i>
              </a>
            </td>
            <td>Consulta Veterinária</td>
            <td>R$70,00</td>
            <td>
              <input type="number" value="1" name="" id="" />
            </td>
            <td>R$70,00</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <i className="far fa-times-circle"></i>
              </a>
            </td>
            <td>Banho</td>
            <td>R$30</td>
            <td>
              <input type="number" value="1" name="" id="" />
            </td>
            <td>R$30,00</td>
          </tr>
        </tbody>
      </table>
    </section>
  </>
);
