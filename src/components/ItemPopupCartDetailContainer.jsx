import { ListGroup, Row } from "react-bootstrap";
import { getPriceFormat } from "../services/Utils";
import ItemPopupCartDetail from "./ItemPopupCartDetail";

const ItemPopupCartDetailContainer = ({ cartProducts }) => {

    return (
        <>

            <ListGroup variant="flush" className="">
                {
                    cartProducts.map(product => <ItemPopupCartDetail key={product.id} product={product} />)
                }
                {
                    cartProducts.length ?
                        (
                            <ListGroup.Item className="m-0 p-0">


                                <div className="d-flex justify-content-end">

                                    <div className="p-2">
                                        <strong>Total: {getPriceFormat(cartProducts.reduce((ac, product) => ac + (product.price * product.quantity), 0))}</strong>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        )
                        : null
                }

            </ListGroup>
        </>
    );
};

export default ItemPopupCartDetailContainer;
