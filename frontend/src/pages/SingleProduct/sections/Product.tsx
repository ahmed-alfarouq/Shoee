import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../SingleProduct.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { Image } from "@/features/Image";
import { Price } from "@/features/Price";
import { Badge } from "@/components/Badge";
import { AddToCart } from "@/features/AddToCart";
import { ProductInfo } from "@/features/ProductInfo";
import { QtySelector } from "@/features/QtySelector";

import formatText from "@/utils/formatText";

import type { ProductProps } from "../SingleProduct.type";

const Product = ({ product, sliderImages }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);

  const onsale = Math.round(product.discountPercentage) >= 9;

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);
  const resetQuantity = () => setQuantity(0);

  return (
    <div className={styles.product}>
      <div className={styles.slider}>
        {onsale && <Badge text="Sale!" />}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, A11y]}
          navigation
        >
          {sliderImages.map((src) => (
            <SwiperSlide key={src}>
              <Image
                src={src}
                placeholder="https://placehold.co/300x300"
                alt={product.title}
                zoomImage={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.content_body}>
          <Price item={product} hasDiscount={onsale} />
          <p className={styles.description}>{product.description}</p>
          <div className={styles.buttons}>
            <QtySelector
              increment={increment}
              decrement={decrement}
              count={quantity}
            />
            <AddToCart
              product={product}
              quantity={quantity}
              callback={resetQuantity}
            />
          </div>
        </div>
        <div className={styles.content_footer}>
          <p className={styles.category}>
            Category:
            <Link to={`/products?category=${product.category}`}>
              {formatText(product.category)}
            </Link>
          </p>
          <ProductInfo item={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
