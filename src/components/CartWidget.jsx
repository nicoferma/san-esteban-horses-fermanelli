import { useState, useRef } from "react";
import { Badge, Button, Overlay, Popover } from "react-bootstrap"
import PopupCartDetail from "./PopupCartDetail";

const CartWidget = () => {
    const [buysNumber, setBuysNumber] = useState(0);

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const handleClick = (event) => {
        setShow(!show);

    };

    return (
        <>
            <Button variant="dark" onClick={handleClick}>
                <i className="fas fa-shopping-cart"></i>
                {' '}
                <Badge ref={target} pill bg="light" text="dark">{buysNumber}</Badge>
            </Button>

            <PopupCartDetail show={show} target={target} />
        </>
    );
}

export default CartWidget;