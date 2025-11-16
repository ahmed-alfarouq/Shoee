import { useState } from "react";

import { Card } from "@features/Card";
import { Tabs } from "@/components/Tabs";
import { TabContent } from "@components/TabContent";
import { ProductsSkeleton } from "@/features/ProductsSkeleton";

import { useProducts } from "@/query/products/useProducts";

import type { TabsWithProductsProps } from "./TabsWithProducts.types";

const TabsWithProducts = ({ tabs, filters }: TabsWithProductsProps) => {
  const [filterOptions, setFilterOptions] = useState(filters);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error } = useProducts(filterOptions);

  const changeTab = (cat: string) => {
    setActiveTab(cat);
    setFilterOptions({ ...filters, category: cat });
  };

  if (isLoading || !data)
    return (
      <>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          changeTab={changeTab}
          ariaLabel="products categories tabs"
        />
        <TabContent activeTab={activeTab} gridTemplateColumns="1fr 1fr 1fr 1fr">
          <ProductsSkeleton />
        </TabContent>
      </>
    );

  if (error) return;

  const products = data.pages[0].products;

  return (
    <>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        changeTab={changeTab}
        ariaLabel="products categories tabs"
      />
      <TabContent
        activeTab={activeTab}
        gridTemplateColumns={
          products.length >= 4 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr"
        }
      >
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </TabContent>
    </>
  );
};

export default TabsWithProducts;
