import ProductBlock from "../../ui/ProductBlock/ProductBlock";
import Advantages from "../../components/Advantages/Advantages";
import Filtes from "../../components/Filters/Filtes";
import InfoMenu from "../../components/InfoMenu/InfoMenu";
import "./Catalog.scss";
import React, { useEffect } from "react";
import axios from "axios";

const Catalog = () => {
  const items = [
    {
      title: "Chair",
      price: "1000$",
      img: "img/entry-img.png",
      inStock: true,
    },
    {
      title: "Chair",
      price: "1000$",
      img: "img/entry-img.png",
      inStock: false,
    },
    {
      title: "Chair",
      price: "1000$",
      inStock: true,
      img: "img/entry-img.png",
    },
    {
      title: "Chair",
      price: "1000$",
      inStock: true,
      img: "img/entry-img.png",
    },
    {
      title: "Chair",
      price: "1000$",
      inStock: true,
      img: "img/entry-img.png",
    },
    {
      title: "Chair",
      price: "1000$",
      inStock: true,
      img: "img/entry-img.png",
    },
    {
      title: "Chair",
      price: "1000$",
      inStock: true,
      img: "img/entry-img.png",
    },
    {
      title: "Chair",
      price: "1000$",
      inStock: true,
      img: "img/entry-img.png",
    },
    {
      title: "Chair",
      price: "1000$",
      img: "img/entry-img.png",
      inStock: true,
    },
    {
      title: "Chair",
      price: "1000$",
      img: "img/entry-img.png",
      inStock: true,
    },
  ];

  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://6715287a33bc2bfe40b99410.mockapi.io/dananz/items")
      .then((res) => {
        setItem(res.data);
      });
  }, []);

  console.log(item);
  const product = item.map((obj, index) => (
    <ProductBlock obj={obj} key={index} />
  ));

  return (
    <div className="catalog">
      <div className="catalog__top">
        <InfoMenu />
      </div>
      <div className="catalog__main">
        <div className="catalog__main__filters">
          <Filtes />
        </div>
        <div className="catalog__main__cards">{product}</div>
      </div>
      <div className="catalog__advantages">
        <Advantages />
      </div>
    </div>
  );
};

export default Catalog;
