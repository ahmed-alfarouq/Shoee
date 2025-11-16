import TabsWithProducts from "components/TabsWithProducts";

import { categories } from "constants";

const OnSaleProducts = () => {
  return (
    <section className="on-sale-products tabs-section">
      <div className="container">
        <h2 className="title under-line">On Sale Products</h2>
        <TabsWithProducts tabs={categories} filters={{ limit: 4, discountPercentage: 9, category: categories[0] }} />
      </div>
    </section>
  );
};

export default OnSaleProducts;
