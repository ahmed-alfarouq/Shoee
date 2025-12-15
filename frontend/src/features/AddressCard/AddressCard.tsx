import styles from "./AddressCard.module.scss";

import { Button } from "@/components/Button";

import type { AddressCardProps } from "./AddressCard.types";

const AddressCard = ({
  address,
  editable = false,
  selectable = false,
  selected = false,
  onSelect,
  onEdit,
  remove,
  setDefault,
  className,
}: AddressCardProps) => {
  return (
    <article
      className={`${styles.card} ${selectable ? styles.select : ""} ${
        selected ? styles.selected : ""
      } ${className}`}
      onClick={() => selectable && onSelect?.(address.id)}
    >
      <div className={styles.header}>
        <h3 className={styles.name}>
          {address.firstName} {address.lastName}
        </h3>
        {address.isDefault && <span className={styles.badge}>Default</span>}
      </div>

      <p className={styles.line}>
        {address.streetName}, Apt {address.apartment}
      </p>
      <p className={styles.line}>
        {address.city}, {address.state}, {address.zipCode}
      </p>
      <p className={styles.line}>{address.country}</p>
      <p className={styles.phone}>{address.phoneNumber}</p>

      {editable && (
        <div className={styles.buttons}>
          <Button size="sm" onClick={() => onEdit?.(address.id)}>
            Edit
          </Button>

          {!address.isDefault && setDefault && (
            <Button size="sm" onClick={() => setDefault(address.id)}>
              Set default
            </Button>
          )}
          {remove && (
            <Button size="sm" onClick={() => remove(address.id)}>
              Remove
            </Button>
          )}
        </div>
      )}
    </article>
  );
};
export default AddressCard;
