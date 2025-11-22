import styles from "../Home.module.scss";

import { TabsWithProducts } from "@features/TabsWithProducts";

import { categories } from "@/constants";

const OnSaleProducts = () => {
  return (
    <section className={styles.tabs_section}>
      <div className="container">
        <h2 className={`${styles.title} under-line`}>On Sale Products</h2>
        <TabsWithProducts
          tabs={categories}
          filters={{
            limit: 4,
            discountPercentage: 9,
            category: [categories[0]],
          }}
        />
      </div>
    </section>
  );
};

export default OnSaleProducts;
