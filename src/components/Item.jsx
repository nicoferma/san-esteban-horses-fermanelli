import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
    // {id, title, text, price, imageUrl}
    return (
        <>
            <Card border="secondary" className="h-100">
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Text>
                        {item.text}
                    </Card.Text>

                </Card.Body>
                <div className="m-4">
                    <Card.Text><strong>${item.price}</strong></Card.Text>
                    <ItemCount initial={1} stock={item.stock} className="align-bottom" />
                </div>

            </Card>
        </>
    );
}

export default Item;