import { createContext, useContext, useState } from "react";
import { ECart } from "../components/ECart/ECart";
import {
  CartItems,
  ECartContext,
  ECartProviderProps,
} from "./definations/types";
import { useLocaStorage } from "../hooks/useLocalStorage";

const cartContext = createContext({} as ECartContext);

export function useECartContext() {
  return useContext(cartContext);
}

export function ECartProvider({ children }: ECartProviderProps) {
  const [cartItems, setCartItems] = useLocaStorage<CartItems[]>("e-cart", []);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const incCartQuantity = (id: number) => {
    setCartItems((currCartItems) => {
      if (currCartItems.find((item) => item.id === id) == null) {
        return [...currCartItems, { id, quantity: 1 }];
      } else {
        return currCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decCartQuantity = (id: number) => {
    setCartItems((currCartItems) => {
      if (currCartItems.find((item) => item.id === id)?.quantity === 1) {
        return currCartItems.filter((item) => item.id !== id);
      } else {
        return currCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currCartItems) => {
      return currCartItems.filter((item) => item.id !== id);
    });
  };

  return (
    <cartContext.Provider
      value={{
        openCart,
        closeCart,
        cartQuantity,
        getItemQuantity,
        incCartQuantity,
        decCartQuantity,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
      <ECart isOpen={isOpen} />
    </cartContext.Provider>
  );
}
