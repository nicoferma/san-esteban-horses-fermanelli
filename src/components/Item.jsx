import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    // {id, title, text, price, imageUrl}
    return (
        <>
            <Card border="secondary" className="h-100">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.imagesUrl[0]} />
                    <Card.Text>
                        {item.text}
                    </Card.Text>

                </Card.Body>
                <div className="m-4">
                    <Card.Text><strong>${item.price}</strong></Card.Text>
                    
                </div>
                <Link to={`/${item.category}/${item.id}`}><Button variant="secondary" className="mt-2 input-block-level form-control">Ver detalles</Button></Link>
            </Card>
        </>
    );
}

export default Item;