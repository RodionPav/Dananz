import ProductBlock from "../../ui/ProductBlock/ProductBlock";
import Advantages from "../../components/Advantages/Advantages";
import Filtes from "../../components/Filters/Filtes";
import InfoMenu from "../../components/InfoMenu/InfoMenu";
import "./Catalog.scss";
import React from "react";
import axios from "axios";
import Skeleton from "../../ui/ProductBlock/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { observer } from "mobx-react-lite";
import CounterCart from "../../mobx/mobxCart";

const Catalog = observer(() => {
  // const count = useSelector((state) => state.counter.cartItems);
  // const dispatch = useDispatch();

  const { items, deleteItems, addItem } = CounterCart;

  const [isLoading, setIsLoading] = React.useState(true);

  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://6715287a33bc2bfe40b99410.mockapi.io/dananz/items")
      .then((res) => {
        setItem(res.data);
        setIsLoading(false);
      });
  }, []);

  const products = item.map((obj, index) => (
    <ProductBlock addItem={addItem} obj={obj} key={index} />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
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
        <div className="catalog__main__cards">
          {isLoading == false ? products : skeletons}
        </div>
      </div>
      <div className="catalog__advantages">
        <Advantages />
      </div>
    </div>
  );
});

export default Catalog;
