// Components
import TabsWithProducts from "components/TabsWithProducts";

// Contants
import { categories } from "constants";

const TopRatedProducts = () => {
  return (
    <section className="tabs-section top-rated-products">
      <div className="container">
        <h2 className="title under-line">Top Rated Products</h2>

        <TabsWithProducts tabs={categories} filters={{ limit: 4, rating: 3.5, category: categories[0] }} />
      </div>
    </section>
  );
};

export default TopRatedProducts;
