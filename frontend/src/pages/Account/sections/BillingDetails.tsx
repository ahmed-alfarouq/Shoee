import { useState } from "react";

import { Modal } from "@components/Modal";
import { Button } from "@components/Button";
import { AddressCard } from "@features/AddressCard";
import { BillingDetailsForm } from "@features/Settings/BillingDetailsForm";

import { addresses } from "@/constants";

const BillingDetails = () => {
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (addressId?: string) => {
    if (addressId) setId(addressId);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {addresses.length ? (
        addresses.map((add) => (
          <AddressCard
            editable
            key={add.id}
            address={add}
            onEdit={toggleModal}
          />
        ))
      ) : (
        <p className="my-2">No addresses found. Add one now.</p>
      )}
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <BillingDetailsForm id={id} />
      </Modal>

      <Button onClick={() => toggleModal()}>Add a new address</Button>
    </>
  );
};

export default BillingDetails;
