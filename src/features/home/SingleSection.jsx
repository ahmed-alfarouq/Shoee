import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import {
  fetchProduct,
  changeSectionClass,
} from "../../app/features/products/productsSlice";

const SingleSection = ({ products, sectionName, loadMore, type }) => {
  const sections = [];
  const dispatch = useDispatch();
  if (products.length !== 0) {
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].title === type &&
        sections.length < 4 &&
        products[i].name !== "Eastern Shoes"
      ) {
        sections.push(
          <div className="item" key={"item_" + products[i].id}>
            <div className="image-container">
              <Link to="/singleProduct">
                <img
                  src={products[i].image}
                  alt={products[i].name}
                  loading="lazy"
                  id={products[i].id}
                  onClick={(e) => {
                    dispatch(fetchProduct(e.target.id));
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
            </div>
            <Link to="/singleProduct">
              <h2
                id={products[i].id}
                onClick={(e) => {
                  dispatch(fetchProduct(e.target.id));
                  window.scrollTo(0, 0);
                }}
              >
                {products[i].name}
              </h2>
            </Link>
            <h3 className="brand">brand: {products[i].brand}</h3>
            <span className="price">${products[i].price}</span>
            <span className="old_price">${products[i].oldPrice}</span>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => {
                return (
                  <span key={index}>
                    {products[i].stars >= index + 1 ? (
                      <BsStarFill />
                    ) : products[i].stars >= index + 0.5 ? (
                      <BsStarHalf />
                    ) : (
                      <BsStar />
                    )}
                  </span>
                );
              })}
            </div>
            <p>{products[i].description}</p>
          </div>
        );
      }
    }
  }
  return (
    <section className="single-section">
      <h2>{sectionName} Section</h2>
      {sections}
      <Link
        to={loadMore}
        onClick={() => dispatch(changeSectionClass(type))}
        className="load_more"
      >
        more ---&raquo;
      </Link>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default connect(mapStateToProps)(SingleSection);
