import React, { useState } from "react";

// Components
import Card from "components/Card";
import QuickView from "components/QuickView";

import { useProducts } from "query/products/useProducts";

const RelatedProducts = ({ category }) => {
  const [modelItem, setModelItem] = useState({});
  const [isModelHidden, setIsModelHidden] = useState(true);
  const { data, isLoading, error } = useProducts({ category, limit: 4 });

  if (isLoading) return <h1>Loading..</h1>;

  if (error) return <h1>{error.message}</h1>;

  const products = data.pages[0].products;

  const openModel = (id) => {
    const product = products.find(p => p._id === id);
    setModelItem(product);
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
        {products.map((product) => (
          <Card key={product._id} item={product} quickView={openModel} />
        ))}
      </div>
      <QuickView item={modelItem} hidden={isModelHidden} close={closeModel} />
    </section>
  );
};

export default RelatedProducts;
