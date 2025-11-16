export interface CartTogglerProps {
  itemCount: number;
  switchCart: () => void;
}

export interface EmptyCartProps {
  switchCart: () => void;
}

export interface CartFooterProps {
  subtotal: number;
  switchCart: () => void;
}
