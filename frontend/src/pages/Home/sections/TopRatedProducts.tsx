import styles from "../Home.module.scss";

import { TabsWithProducts } from "@features/TabsWithProducts";

import { categories } from "@/constants";

const TopRatedProducts = () => {
  return (
    <section className={styles.tabs_section}>
      <div className="container">
        <h2 className={`${styles.title} under-line`}>Top Rated Products</h2>

        <TabsWithProducts
          tabs={categories}
          filters={{ limit: 4, rating: 3.5, category: categories[0] }}
        />
      </div>
    </section>
  );
};

export default TopRatedProducts;
