export interface ECartProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface ECartContext {
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  getItemQuantity: (id: number) => number;
  incCartQuantity: (id: number) => void;
  decCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItems[];
}

export interface CartItems {
  id: number;
  quantity: number;
}
