// Components
import { QtySelector } from "@features/QtySelector";

// Assets
import { IoCloseCircleOutline } from "react-icons/io5";

// Utils
import truncate from "@/utils/truncate";

const CartItem = ({ item }) => {
  const increment = () => {};
  const decrement = () => {};

  return (
    <li className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="content">
        <span className="title">{truncate(item.title, 4)}</span>
        <QtySelector
          count={item.qty}
          increment={increment}
          decrement={decrement}
        />
        <div className="price">
          <bdi>
            <span className="currency-symbol">$</span>
            {(item.qty * item.price).toFixed(2)}
          </bdi>
        </div>
      </div>

      <IoCloseCircleOutline className="remove" onClick={() => {}} />
    </li>
  );
};

export default CartItem;
