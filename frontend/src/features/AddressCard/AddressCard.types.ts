import type { User } from "@/types/index.types";

export interface AddressCardProps {
  /**
   * REQUIRED: The user's billing address object
   */
  address: User["billingDetails"];

  /**
   * OPTIONAL: Enables edit mode for the address card
   * When true, the card shows edit icon
   *
   * @default false
   */
  editable?: boolean;

  /**
   * OPTIONAL: Callback fired when the user clicks the edit button
   *
   * @argument id
   */
  onEdit?: (id: string) => void;

  /**
   * OPTIONAL: Callback fired when the user clicks the set default button.
   *
   * @argument id - The ID of the address to set as default.
   */
  setDefault?: (id: string) => void;

  /**
   * OPTIONAL: Makes the card selectable (for checkout or selection flows).
   *
   * @default false
   */
  selectable?: boolean;

  /**
   * OPTIONAL: Highlights the card if true (used with selectable).
   *
   * @default false
   */
  selected?: boolean;

  /**
   * OPTIONAL: Callback fired when the user selects the card.
   *
   * @argument id - The ID of the selected address.
   */
  onSelect?: (id: string) => void;
}
