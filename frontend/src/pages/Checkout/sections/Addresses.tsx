import { useUser } from "@/stores/user";

import styles from "../Checkout.module.scss";

import { AddressCard } from "@/features/AddressCard";
import { useCheckoutActions, useCheckoutState } from "@/stores/checkout";

const Addresses = () => {
  const user = useUser();

  const { address } = useCheckoutState();
  const { setAddress } = useCheckoutActions();

  return (
    <section className={styles.addresses}>
      <h2>Delivery Address</h2>
      {user?.addresses.map((add) => (
        <AddressCard
          selectable
          key={add.id}
          address={add}
          className={styles.address}
          onSelect={setAddress}
          selected={address?.id === add.id}
        />
      ))}
    </section>
  );
};

export default Addresses;
