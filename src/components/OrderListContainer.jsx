import OrderList from "./OrderList"
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getAllOrders } from "../services/Orders";
import Loading from "./Loading";

const OrderListContainer = () => {
    const [orders, setOrders] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let mounted = true;
        setFinished(false);

        getAllOrders().then(orders => {
            if (mounted) {
                setOrders(orders);
                setFinished(true);
            }
        })


        return () => mounted = false;
    }, []);


    return (
        <Container className="mb-5">
            {finished ?
                <OrderList orders={orders} /> :
                <Loading />
            }

        </Container>

    )
}

export default OrderListContainer