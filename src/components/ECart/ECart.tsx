import { Offcanvas, Stack } from "react-bootstrap";
import { useECartContext } from "../../context/ECartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "../CartItem/CartItem";
import { ECartTypes } from "./definations/types";
import storeData from "../../data/items.json";
import "./styles/index.scss";

export function ECart({ isOpen }: ECartTypes) {
  const { closeCart, cartItems } = useECartContext();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeData.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="bg-dark p-2"
        >
          <Offcanvas.Title className="display-3">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-secondary">
          <Stack gap={4}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              <p>
                Total: 
                <span>{formatCurrency(totalPrice)}</span>
              </p>
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
