import { Row, Col, Card, Container, Button, Badge } from "react-bootstrap";
import ItemCarouselImages from "./ItemCarouselImages";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import ItemCarouselCategory from "./ItemCarouselCategory";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ItemDetail = ({ product }) => {
  const { addProduct, cartProducts, getProductById } = useContext(CartContext);
  const [cartProduct, setCartProduct] = useState(null);

  useEffect(() => {
    setCartProduct(getProductById(product.id));


  }, [product, cartProducts, getProductById]);

  const addProductToCart = (quantity) => {
  
    addProduct(product, quantity);
    setCartProduct(getProductById(product.id));
    
  }

  return (
    <Container className="mt-5" style={{ textAlign: 'left' }}>
      <Row>
        <Col xs={10}>
          <Card className="mb-3" style={{ border: "0" }} >
            <Row >
              {cartProduct ?
                <h3 style={{ position: 'absolute', zIndex: 100 }}><Badge bg="secondary">{ cartProduct.quantity }</Badge></h3>
                :
                null
              }

              <Col xs={5}>
                <ItemCarouselImages images={product.imagesUrl} />
              </Col>
              <Col xs={7}>
                <Card.Body>
                  <Row>
                    <Col xs={12}>
                      <Card.Title>
                        <h2>{product.title}</h2>
                      </Card.Title>
                      <Card.Text>
                        {product.text}
                      </Card.Text>
                    </Col>

                  </Row>
                  <Row className="">
                    <Col xs={6}>

                    </Col>
                    <Col xs={6} className="" >
                      <ItemCount initial={1} stock={product.stock} handleAddProduct={addProductToCart} />
                      {cartProduct ?
                        <div>
                          <Link to={'/cart'}><Button variant="secondary" className="mt-2 input-block-level form-control">Finalizar compra</Button></Link>
                        </div>
                        :
                        null
                      }
                      <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={2}>
          <Row>
            <Col xs={12}>
              <ItemCarouselCategory category={product.category} />
            </Col>
          </Row>
        </Col>
      </Row >



    </Container >
  );
};

export default ItemDetail;

