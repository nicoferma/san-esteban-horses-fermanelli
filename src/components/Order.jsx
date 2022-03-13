import { ListGroup, Row, Col, Badge } from "react-bootstrap"
import { getStringFormatDate } from "../services/Utils"
import { Link } from "react-router-dom"

const Order = ({ order }) => {


    return (
        <ListGroup.Item className="m-0 p-0">

            <Row className="mb-1 mt-1">
                <Col xs={2} className="m-0 p-0">
                    <div className="">
                        {order.buyer.firstName}


                    </div>
                </Col>
                <Col xs={8} className="m-0 pl-1">

                    {order.products.map(product => (

                        <Link key={product.id} to={`/${product.category}/${product.id}`}>{product.title}</Link>
                    ))}
                </Col>
                <Col xs={2}>
                    <div className="fw-bold">${order.total}</div>
                    <Row>
                        <Badge pill bg="light" text="dark">{getStringFormatDate(new Date(order.date.seconds * 1000))}</Badge>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default Order