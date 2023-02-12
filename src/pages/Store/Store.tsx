import { Col, Row, Stack } from "react-bootstrap";
import ItemCard from "../../components/ItemCard/ItemCard";
import storeData from "../../data/items.json";
import "./styles/index.scss";

const Store = () => {
  return (
    <>
      <h2 className="display-4 text-uppercase text-center mb-5 text-black-50 bg-primary-subtle rounded-4 fw-bolder shadow-md">Store</h2>
      <Stack>
        <Row md={2} xs={1} lg={3} className="g-5">
          {storeData.map((item) => {
            return (
              <Col key={item.id}>
                <ItemCard {...item} />
              </Col>
            );
          })}
        </Row>
      </Stack>
    </>
  );
};

export default Store;
