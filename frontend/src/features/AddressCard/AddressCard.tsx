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
  const handleSelect = () => {
    if (selectable) onSelect?.(address);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!selectable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(address);
    }
  };

  return (
    <article
      tabIndex={selectable ? 0 : undefined}
      role={selectable ? "button" : undefined}
      aria-pressed={selectable ? selected : undefined}
      className={`${styles.card} ${selectable ? styles.select : ""} ${
        selected ? styles.selected : ""
      } ${className}`}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
    >
      {selectable && <span className={styles.radio} />}
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
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(address.id);
            }}
          >
            Edit
          </Button>

          {!address.isDefault && setDefault && (
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setDefault(address.id);
              }}
            >
              Set default
            </Button>
          )}
          {remove && (
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                remove(address.id);
              }}
            >
              Remove
            </Button>
          )}
        </div>
      )}
    </article>
  );
};
export default AddressCard;
