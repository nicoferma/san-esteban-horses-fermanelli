import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/Products";
import { Card, Carousel } from "react-bootstrap";

const ItemCarouselCategory = ({category}) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        let mounted = true;
        getProductsByCategory(category).then(productsCategory => {
          if (mounted) {
            setProduct(productsCategory)
          }
        });
        return () => mounted = false;
      }, [category]);

    return (
        <>
            <Carousel indicators={false} variant="dark" fade>
                {
                    products.map(item => (

                        <Carousel.Item key={item.id}>

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
        </>
    );
};

export default ItemCarouselCategory;
