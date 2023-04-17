import React from "react";
import "./index.css";
export const CartAdd = () => (
  <>
    <section id="cart-add" className="section-p1">
      <div id="cuopon">
        <h3>Apply Coupon</h3>
        <div>
          <input type="text" name="" id="" placeholder="Enter Your Coupon" />
          <button className="normal">Apply</button>
        </div>
      </div>

      <div id="subtotal">
        <h3>Cart Totals</h3>
        <table>
          <tr>
            <td>Cart Subtotal</td>
            <td>$ 335</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>$ 335</strong>
            </td>
          </tr>
        </table>
        <button className="normal">Proceed to checkout</button>
      </div>
    </section>
  </>
);
