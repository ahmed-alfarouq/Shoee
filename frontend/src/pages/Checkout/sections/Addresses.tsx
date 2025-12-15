import { useState } from "react";
import { useUser } from "@/stores/user";

import styles from "../Checkout.module.scss";

import { AddressCard } from "@/features/AddressCard";

const Addresses = () => {
  const user = useUser();

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
          selected={add.isDefault || selectedAddress === add.id}
        />
      ))}
    </section>
  );
};

export default Addresses;
