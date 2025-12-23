import { useState } from "react";
import { useUserActions } from "@/stores/user";

import { Modal } from "@components/Modal";
import { Button } from "@components/Button";
import { AddressCard } from "@features/AddressCard";
import { BillingDetailsForm } from "@features/Settings/BillingDetailsForm";

import useUser from "@/query/user/useUser";

const BillingDetails = () => {
  const { data: user } = useUser();

  const [addresses, setAddresses] = useState(user?.addresses);

  const { setDefaultAddress, removeAddress } = useUserActions();

  const [id, setId] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (addressId?: string) => {
    setId(addressId);
    setIsOpen((prev) => !prev);
  };

  const handleRemoveAddress = async (id: string) => {
    const [, data] = await removeAddress(id);

    if (data?.addresses) {
      setAddresses(data.addresses);
    }
  };

  const handleSetDefaultAddress = async (id: string) => {
    const [, data] = await setDefaultAddress(id);

    if (data?.addresses) {
      setAddresses(data.addresses);
    }
  };

  return (
    <>
      {addresses?.length ? (
        addresses.map((add) => (
          <AddressCard
            editable
            key={add.id}
            address={add}
            onEdit={toggleModal}
            remove={handleRemoveAddress}
            setDefault={handleSetDefaultAddress}
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
