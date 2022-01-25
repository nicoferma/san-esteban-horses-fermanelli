import { useEffect, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import { LoadCart } from "../services/Cart";

const PopupCartDetail = ({ show, target }) => {
    const [cart, setCart] = useState([]);


    return (
        <div >
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Header as="h3">Detalle de compras</Popover.Header>
                    <Popover.Body>
                        {
                            cart.map(item => (
                                <div key={item.id}>
                                    {item.id} - {item.name}
                                    <br />
                                </div>
                            ))
                        }
                        <Button variant="secondary" className="mt-2 input-block-level form-control">Ver carrito</Button>
                        <Button variant="secondary" className="mt-2 input-block-level form-control">Finalizar compra</Button>
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
};

export default PopupCartDetail;
