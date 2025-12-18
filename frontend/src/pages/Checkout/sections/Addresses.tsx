import { useState } from "react";
import { useUser } from "@/stores/user";

import styles from "../Checkout.module.scss";

import { AddressCard } from "@/features/AddressCard";
import { useCheckoutActions } from "@/stores/checkout";

const Addresses = () => {
  const user = useUser();

  const { setAddress } = useCheckoutActions();

  const [selectedAddress, setSelectedAddress] = useState("");

  return (
    <section className={styles.addresses}>
      <h2>Delivery Address</h2>
      {user?.addresses.map((add) => (
        <AddressCard
          selectable
          key={add.id}
          address={add}
          className={styles.address}
          onSelect={setSelectedAddress}
          selected={selectedAddress === add.id}
        />
      ))}
    </section>
  );
};

export default Addresses;
