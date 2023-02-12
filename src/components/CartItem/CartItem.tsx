import { Button, Container, Stack } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useECartContext } from "../../context/ECartContext";
import storeData from "../../data/items.json";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItemTypes } from "./definations/types";

export function CartItem({ id, quantity }: CartItemTypes) {
  const { removeFromCart } = useECartContext();
  const item = storeData.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <>
      <Container className="p-2 text-light">
        <Stack direction="horizontal">
          <div className="item-img">
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
          </div>
          <div className="me-auto ms-3 d-flex flex-column">
            <div className="d-flex flex-column">
              <p className="fs-4 fw-bolder">{item.title}</p>
              {quantity > 1 && (
                <p className="text-light fs-4">
                  <RxCross2 /> {quantity}
                </p>
              )}
              <div className="text-light fs-4">
                {formatCurrency(item.price)}
              </div>
            </div>
            <div className="text-warning"></div>
          </div>
          <div>
            <p className="fs-4 fw-bolder">
              {formatCurrency(item.price * quantity)}
            </p>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(item.id)}
            >
              <RxCross2 />
            </Button>
          </div>
        </Stack>
      </Container>
    </>
  );
}
