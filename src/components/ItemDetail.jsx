import { Row, Col, Card, Container, Carousel } from "react-bootstrap";
import ItemCarouselImages from "./ItemCarouselImages";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/Products";

const ItemDetail = ({ product }) => {
  const [productsSuggestion, setProductSuggestion] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProductsByCategory(product.category).then(productsCategory => {
      if (mounted) {
        setProductSuggestion(productsCategory)
      }
    });
    return () => mounted = false;
  }, [product]);

  return (
    <Container className="mt-5" style={{ textAlign: 'left' }}>
      <Row>
        <Col xs={10}>
          <Card className="mb-3" style={{ border: "0" }} >
            <Row >
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
                      <ItemCount initial={1} stock={product.stock} />
                      <Card.Text><small class="text-muted">Last updated 3 mins ago</small></Card.Text>
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
              <Carousel indicators={false} variant="dark" fade>
                {
                  productsSuggestion.map(item => (

                    <Carousel.Item>

                      <Card className="h-100" style={{ border: "0" }}>
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Img variant="top" src={item.imagesUrl[0]} />
                          <Card.Text >{item.text}</Card.Text>
                          <Card.Text><strong>${item.price}</strong></Card.Text>
                          <Link to={`/${item.category}/${item.id}`} className="text-secondary stretched-link"></Link>
                        </Card.Body>

                      </Card>
                    </Carousel.Item>
                  ))
                }

              </Carousel>
            </Col>

          </Row>
        </Col>
      </Row >



    </Container >
  );
};

export default ItemDetail;

