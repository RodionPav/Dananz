import "./Catalog.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductBlock from "../../ui/ProductBlock/ProductBlock";
import Advantages from "../../components/Advantages/Advantages";
import Filtes from "../../components/Filters/Filtes";
import Skeleton from "../../ui/ProductBlock/Skeleton";
import ErrorCatalog from "../../components/ErrorCatalog/ErrorCatalog";
import Search from "../../ui/Search/Search";
import { axiosCatalog } from "../../app/slices/CatalogSlice";
import { addItem } from "../../app/slices/CartSlice";

const Catalog = () => {
  const catalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(()=>{

  }, [searchValue])

  const addCatalogItem = (obj) => {
    dispatch(addItem(obj));
  };

  const axiosData = () => {
    dispatch(axiosCatalog());
  };

  const products = catalog.catalogItems.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  )
  .map((obj, index) => (
    <ProductBlock addCatalogItem={addCatalogItem} obj={obj} key={index} />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="catalog">
      <div className="catalog__main">
        <div className="catalog__main__filters">
          <Filtes />
        </div>
        <div className="catalog__main__content">
          {catalog.error == false ? (
            <>
              <div className="catalog__main__content__search">
                <Search
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  catalog={catalog}
                />
              </div>
              <div className="catalog__main__content__products">
                {catalog.loading == false ? products : skeletons}
              </div>
            </>
          ) : (
            <ErrorCatalog axiosData={axiosData} />
          )}
        </div>
      </div>
      <div className="catalog__advantages">
        <Advantages />
      </div>
    </div>
  );
};

export default Catalog;
