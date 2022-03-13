import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPriceFormat } from "../services/Utils";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

const Item = ({ item }) => {
    const { cartProducts, getProductById } = useContext(CartContext);
    const [cartProduct, setCartProduct] = useState(null);

    useEffect(() => {
        setCartProduct(getProductById(item.id));


    }, [item]);

    return (
        <>
            <Card border="secondary" className="h-100">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    {cartProduct ?
                        <h3 style={{ position: 'absolute', zIndex: 100 }}><Badge bg="secondary">{cartProduct.quantity}</Badge></h3>
                        :
                        null
                    }
                    <Card.Img variant="top" src={item.imagesUrl[0]} />
                    <Card.Text>
                        {item.text}
                    </Card.Text>

                </Card.Body>
                <div className="m-4">
                    <Card.Text><strong>{getPriceFormat(item.price)}</strong></Card.Text>

                </div>
                <Link to={`/${item.category}/${item.id}`}><Button variant="secondary" className="mt-2 input-block-level form-control">Ver detalles</Button></Link>
            </Card>
        </>
    );
}

export default Item;