import { useState } from "react";
import { Badge, Button } from "react-bootstrap"

const CartWidget = () => {
    const [buysNumber, setBuysNumber] = useState(0);


    return (
        <>
            <Button variant="dark" onClick={() => setBuysNumber(buysNumber + 1)}>
                <i className="fas fa-shopping-cart"></i>
                {' '}
                <Badge pill bg="light" text="dark">{buysNumber}</Badge>
            </Button>
        </>
    );
}

export default CartWidget;
