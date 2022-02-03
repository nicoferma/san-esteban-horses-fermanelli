import { Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <>
            {items.length > 0?

                <Row xs={2} md={4} className="g-4">
                    {items.map(item => (

                        <Col key={item.id}>
                            <Item item={item} />
                        </Col>
                    ))}

                </Row>
                :
                'No hay productos.'
            }
        </>
    );
}

export default ItemList;
