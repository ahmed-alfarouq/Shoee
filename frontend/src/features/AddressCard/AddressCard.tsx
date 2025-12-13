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
  setDefault,
}: AddressCardProps) => {
  return (
    <article
      className={`${styles.card} ${selectable ? styles.select : ""} ${
        selected ? styles.selected : ""
      }`}
      onClick={() => selectable && onSelect?.(address.id)}
    >
      <div className={styles.header}>
        <h3 className={styles.name}>
          {address.firstName} {address.lastName}
        </h3>
        {address.default && <span className={styles.badge}>Default</span>}
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

          {!address.default && setDefault && (
            <Button size="sm" onClick={() => setDefault(address.id)}>
              Set default
            </Button>
          )}
        </div>
      )}
    </article>
  );
};
export default AddressCard;
