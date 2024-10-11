import ProductBlock from "../../blocks/ProductBlock/ProductBlock";
import Advantages from "../../components/Advantages/Advantages";
import Filtes from "../../components/Filters/Filtes";
import InfoMenu from "../../components/InfoMenu/InfoMenu";
import "./Catalog.scss";

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

  const product = items.map((obj, index) => (
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
