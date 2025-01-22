import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
// Redux
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";
// Utils
import calcOriginalPrice from "../../utils/calcOriginalPrice";
import IncrementDecrementCounter from "../../components/IncrementDecrementCounter";
import AddToCart from "../../components/AddToCart";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import formatCategory from "../../utils/formatCategory";
import BlurImage from "../../components/BlurImage";
import Reviews from "./Reviews";

// import RelatedProducts from "./relatedProducts";

const SingleProduct = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const products = useSelector((state) => state.products.products);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);
  const resetQuantity = () => setQuantity(0);

  const product = useMemo(() => {
    const productItem = products.find((p) => p.id === parseInt(id));
    setImages(productItem.images);
    return productItem;
  }, [products, id]);

  return (
    <main className="single_product">
      <div className="container">
        <div className="product">
          <div className="images">
            {Math.round(product.discountPercentage) >= 9 && (
              <span className="onsale">Sale!</span>
            )}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, A11y]}
              navigation
            >
              {images.map((image) => (
                <SwiperSlide key={image}>
                  <BlurImage
                    src={image}
                    placeholder="https://placehold.co/300x300"
                    alt={product.title}
                    zoomImage={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="content">
            <h1 className="title">{product.title}</h1>
            <div className="content-body">
              <div className="price">
                {Math.round(product.discountPercentage) >= 9 && (
                  <>
                    <span className="sr-only">
                      Original price was: $
                      {calcOriginalPrice(
                        product.price,
                        product.discountPercentage
                      )}
                      .
                    </span>
                    <del aria-hidden="true" className="original-price">
                      $
                      {calcOriginalPrice(
                        product.price,
                        product.discountPercentage
                      )}
                    </del>
                  </>
                )}
                <span className="sr-only">
                  Current price is: ${product.price}.
                </span>
                <ins aria-hidden="true" className="current-price">
                  ${product.price}
                </ins>
              </div>
              <p className="description">{product.description}</p>
              <div className="buttons">
                <IncrementDecrementCounter
                  increment={increment}
                  decrement={decrement}
                  count={quantity}
                />
                <AddToCart
                  id={product.id}
                  quantity={quantity}
                  callback={resetQuantity}
                />
              </div>
            </div>
            <div className="content-footer">
              <p className="category">
                Category:
                <Link to={`/products/category/${product.category}`}>
                  {formatCategory(product.category)}
                </Link>
              </p>
              <ul className="info">
                <li>Free shipping on orders over $100!</li>
                <li>
                  <IoMdArrowDroprightCircle /> {product.returnPolicy}
                </li>
                <li>
                  <IoMdArrowDroprightCircle /> {product.shippingInformation}
                </li>
                <li>
                  <IoMdArrowDroprightCircle /> {product.warrantyInformation}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Reviews reviews={product.reviews} />
      </div>
    </main>
  );
};

export default SingleProduct;
