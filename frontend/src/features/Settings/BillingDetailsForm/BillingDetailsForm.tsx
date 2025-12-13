import { useState, useTransition } from "react";
import { Formik, Form } from "formik";

import styles from "./BillingDetailsForm.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { SelectInput } from "@/components/SelectInput";
import { FormMessage } from "@/features/Auth/FormMessage";

import { useUser } from "@/stores/user";

import { addresses, countries } from "@/constants";

import billingDetailsSchema, {
  type BillingDetailsSchema,
} from "@/schema/billingDetails";

import type { FormMessageProps } from "@/features/Auth/FormMessage/FormMessage.types";

const BillingDetailsForm = ({ id }: { id?: string }) => {
  const [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    message: string;
  }>({ type: "error", message: "" });

  const user = useUser();

  const addressToEdit = addresses.find((addr) => addr.id === id) || {
    firstName: "",
    lastName: "",
    country: countries[0].value,
    city: "",
    state: "",
    zipCode: "",
    streetName: "",
    apartment: "",
    phoneNumber: "",
  };
  console.log(addressToEdit);
  const submit = (values: BillingDetailsSchema) => {
    startTransition(() => {
      console.log(values);
      // const [err, data] = id ? updateAddress({id, ...values}) : createAddress(values);
      // if (err) {
      //   setMessage({ type: "error", message: err.message });
      //   return;
      // }

      // setMessage({
      //   type: "success",
      //   message:
      //     data?.msg ||
      //     `Address has been ${id ? "updated" : "added"} successfully`,
      // });
    });
  };

  return (
    <Formik
      onSubmit={submit}
      initialValues={addressToEdit}
      validationSchema={billingDetailsSchema}
    >
      {({ handleChange, initialValues }) => (
        <Form className={styles.form}>
          <Input label="First Name" name="firstName" disabled={isPending} />
          <Input label="Last Name" name="lastName" disabled={isPending} />
          <SelectInput
            name="country"
            options={countries}
            disabled={isPending}
            onSelect={handleChange}
            defaultValue={initialValues.country}
          />
          <Input label="Town / City" name="city" disabled={isPending} />
          <Input label="State" name="state" disabled={isPending} />
          <Input label="Street Name" name="streetName" disabled={isPending} />
          <Input label="Zip Code" name="zipCode" disabled={isPending} />
          <Input
            label="Apartment (optional)"
            name="apartment"
            disabled={isPending}
          />
          <Input label="Phone Number" name="phoneNumber" disabled={isPending} />

          <FormMessage type={message.type} message={message.message} />

          <Button type="submit" disabled={isPending}>
            {id ? "Update" : "Add"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BillingDetailsForm;
