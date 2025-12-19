import { useCartActions } from "@/stores/cart";

import styles from "./ProductsTable.module.scss";

import { Image } from "@features/Image";
import { QtySelector } from "@features/QtySelector";

import { IoCloseCircleOutline } from "react-icons/io5";

import type { ProductsTableProps } from "./ProductsTable.types";

const ProductsTable = ({ products }: ProductsTableProps) => {
  const { updateQty, removeItem } = useCartActions();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th colSpan={2}>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr className={styles.product} key={product.id}>
            <td>
              <button
                className={styles.remove}
                onClick={() => removeItem(product.id)}
                aria-label={`Remove ${product.title}`}
              >
                <IoCloseCircleOutline />
              </button>
            </td>
            <td>
              <Image
                src={product.thumbnail}
                placeholder="https://placehold.co/300x300"
                alt={product.title}
                className={styles.thumbnail}
              />
            </td>
            <td data-title="Product">{product.title}</td>
            <td data-title="Price">${product.price.toFixed(2)}</td>
            <td data-title="Quantity">
              <QtySelector
                increment={() => updateQty(product.id, product.qty + 1)}
                decrement={() => updateQty(product.id, product.qty - 1)}
                count={product.qty}
              />
            </td>
            <td data-title="Subtotal">
              ${(product.price * product.qty).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
