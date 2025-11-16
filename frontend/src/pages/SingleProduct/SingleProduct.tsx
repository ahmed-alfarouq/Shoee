import { useParams } from "react-router-dom";

// Components
import Reviews from "./sections/Reviews";
import Product from "./sections/Product";
import RelatedProducts from "./sections/RelatedProducts";

// Query
import useProduct from "query/products/useProduct";

const SingleProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useProduct(id);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <h1>{error.message}</h1>;
  console.log(product)
  return (
    <main className="single_product">
      <div className="container">
        <Product product={product} sliderImages={product.images} />
        {product.reviews.length > 0 && <Reviews reviews={product.reviews} />}
        <RelatedProducts
          category={product.category}
        />
      </div>
    </main>
  );
};

export default SingleProduct;
