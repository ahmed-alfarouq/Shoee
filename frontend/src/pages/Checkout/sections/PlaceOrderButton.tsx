import { useState, useTransition } from "react";

import styles from "../Checkout.module.scss";

import { Button } from "@/components/Button";
import { FormMessage } from "@/features/Auth/FormMessage";

import type { FormMessageProps } from "@/features/Auth/FormMessage/FormMessage.types";

const PlaceOrderButton = () => {
  const [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    message: string;
  }>({ type: "error", message: "" });

  const placeOrder = () => {
    setMessage({ type: "error", message: "" });

    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 1500));

      setMessage({ type: "success", message: "Order placed successfully!" });
    });
  };
  return (
    <div className={styles.place_order}>
      <Button onClick={placeOrder} disabled={isPending}>
        {isPending ? "Processing your order..." : "Place Order"}
      </Button>
      <FormMessage type={message.type} message={message.message} />
    </div>
  );
};

export default PlaceOrderButton;
