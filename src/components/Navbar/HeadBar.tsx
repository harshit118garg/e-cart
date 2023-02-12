import { Container, Navbar, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import "./styles/index.scss";
import { useECartContext } from "../../context/ECartContext";

export function HeadBar() {
  const { cartQuantity, openCart } = useECartContext();

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow-lg mb-3"
      >
        <Container>
          <div className="main-brand">
            <Link to="/">
              <p className="fw-bold p-2 text-uppercase">E-COM STORE</p>
            </Link>
          </div>
          <Button
            className="shop-cart"
            variant="light"
            onClick={() => openCart()}
          >
            <ImCart />
            {cartQuantity > 0 && (
              <Badge bg="danger" className="rounded-circle">
                {cartQuantity}
              </Badge>
            )}
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
