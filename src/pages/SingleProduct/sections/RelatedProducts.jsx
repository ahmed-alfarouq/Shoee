import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Card from "../../../components/Card";
import QuickView from "../../../components/QuickView";

const RelatedProducts = ({ productID, category }) => {
  const products = useSelector((state) => state.products.products);
  const [modelItem, setModelItem] = useState({});
  const [isModelHidden, setIsModelHidden] = useState(true);

  const productsMap = useMemo(() => {
    return products.reduce((map, product) => {
      if (product.category === category && product.id !== productID) {
        map[product.id] = product;
      }
      return map;
    }, {});
  }, [products, productID, category]);

  const openModel = (id) => {
    setModelItem(productsMap[id] || {});
    setIsModelHidden(false);
  };

  const closeModel = () => {
    setModelItem({});
    setIsModelHidden(true);
  };

  return (
    <section className="related-products">
      <h2 className="title">Related Products</h2>
      <div className="products">
        {Object.values(productsMap).map((product) => (
          <Card key={product.id} item={product} quickView={openModel} />
        ))}
      </div>
      <QuickView item={modelItem} hidden={isModelHidden} close={closeModel} />
    </section>
  );
};

export default RelatedProducts;
