import { ListGroup } from "react-bootstrap"
import Order from "./Order"

const OrderList = ({ orders }) => {
    return (
        <>
            {orders.length > 0 ?
                (<ListGroup variant="flush" className="">
                    {
                        orders.map(order => <Order key={order.id} order={order} />)
                    }

                </ListGroup>

                )
                :
                'No hay productos.'
            }
        </>
    )
}

export default OrderList

