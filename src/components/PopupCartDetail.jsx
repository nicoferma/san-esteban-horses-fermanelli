import { useContext } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const PopupCartDetail = ({ show, target, handleToggleShow}) => {
    const { cartProducts } = useContext(CartContext);

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
                            cartProducts.map(product => (
                                <div key={product.id}>
                                    {product.id} - {product.title} - {product.quantity}
                                    <br />
                                </div>
                            ))
                        }
                        <Link to={'/cart'}><Button onClick={handleToggleShow} variant="secondary" className="mt-2 input-block-level form-control">Finalizar compra</Button></Link>
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
};

export default PopupCartDetail;
