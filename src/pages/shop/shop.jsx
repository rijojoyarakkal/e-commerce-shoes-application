import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import {Navbar} from "../../components/navbar"
import navimg from '../../images/nike1.jpg'
export const Shop = () => {
  return (
    <div className="shop">
      <Navbar/>
      <div className="shopTitle">
      <img className="nikelogos"src={navimg} alit="img"></img>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
