import { useState, useRef, useContext } from "react";
import { Badge, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext";
import PopupCartDetail from "./PopupCartDetail";

const CartWidget = () => {
    const { totalCartProducts } = useContext(CartContext);

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const handleClick = () => {
        setShow(!show);

    };

    return (
        <>
            <Button ref={target} variant="dark"  onClick={handleClick}>
                <i className="fas fa-shopping-cart"></i>
                {' '}
                {totalCartProducts?
                    <Badge pill bg="light" text="dark">{totalCartProducts}</Badge>
                    :
                    null
                }
            </Button>

            <PopupCartDetail show={show} target={target} handleToggleShow={handleClick} />
        </>
    );
}

export default CartWidget;