import React, { useState } from "react";

import Card from "./Card";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import ProductsSkeleton from "./ProductsSkeleton";

import { useProducts } from "query/products/useProducts";

const TabsWithProducts = ({ tabs, filters }) => {
  const [filterOptions, setFilterOptions] = useState(filters);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error } = useProducts(filterOptions);

  const changeTab = (cat) => {
    setActiveTab(cat);
    setFilterOptions({ ...filters, category: cat });
  };

  if (isLoading) return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} changeTab={changeTab} ariaLabel="products categories tabs" />
      <TabContent activeTab={activeTab} gridTemplateColumns="1fr 1fr 1fr 1fr">
        <ProductsSkeleton count={4} />
      </TabContent>
    </>
  )

  if (error) return;

  const products = data.pages[0].products;

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} changeTab={changeTab} ariaLabel="products categories tabs" />
      <TabContent activeTab={activeTab} gridTemplateColumns={products.length >= 4 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr"}>
        {products.map((product) => (
          <Card key={product._id} item={product} />
        ))}
      </TabContent>
    </>
  );
};

export default TabsWithProducts;
