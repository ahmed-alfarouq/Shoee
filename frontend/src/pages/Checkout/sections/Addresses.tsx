import styles from "../Checkout.module.scss";

import { AddressCard } from "@/features/AddressCard";

import { useCheckoutActions, useCheckoutState } from "@/stores/checkout";

import useUser from "@/query/user/useUser";

const Addresses = () => {
  const { data: user } = useUser();

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
