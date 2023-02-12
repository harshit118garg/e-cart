import { Button, Card } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useECartContext } from "../../context/ECartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { ItemCardPropTypes } from "./definations/types";

const ItemCard: React.FC<ItemCardPropTypes> = (item: ItemCardPropTypes) => {
  const { getItemQuantity, incCartQuantity, decCartQuantity, removeFromCart } =
    useECartContext();

  const quantity = getItemQuantity(item.id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={item.thumbnail}
          height="200px"
          style={{ objectFit: "cover" }}
          className="shadow"
        />
        <Card.Body className="d-flex flex-column bg-secondary">
          <Card.Title className="d-flex justify-content-between align-items-baseline mx-4 g-4">
            <p className="fs-2 text-uppercase">{item.title}</p>
            <p className="ms-5 p-2 rounded-2 text-bg-danger">
              {formatCurrency(item.price)}
            </p>
          </Card.Title>
          <div className="mt-auto bg-info rounded-2">
            {quantity === 0 ? (
              <Button
                className="w-100 fs-2 text-uppercase"
                onClick={() => incCartQuantity(item.id)}
              >
                <AiOutlinePlus /> Add to Cart
              </Button>
            ) : (
              <div
                className="d-flex flex-column align-items-center"
                style={{ gap: "0.75rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-evenly w-100"
                  style={{ gap: "0.75rem" }}
                >
                  <Button
                    variant="warning"
                    onClick={() => decCartQuantity(item.id)}
                    className="fs-3 mt-2"
                  >
                    <AiOutlineMinus />
                  </Button>
                  <span className="fs-2 fw-bolder text-bg-dark px-3 rounded-2">
                    {quantity} in Cart
                  </span>
                  <Button
                    variant="warning"
                    onClick={() => incCartQuantity(item.id)}
                    className="fs-3 mt-2"
                  >
                    <AiOutlinePlus />
                  </Button>
                </div>
                <Button
                  className="mb-2 fs-3"
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                >
                  Remove From Cart
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCard;
