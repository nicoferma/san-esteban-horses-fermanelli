import { ListGroup } from "react-bootstrap";
import ItemPopupCartDetail from "./ItemPopupCartDetail";

const ItemPopupCartDetailContainer = ({ cartProducts }) => {
    return (
        <>

            <ListGroup variant="flush" className="">
                {
                    cartProducts.map(product => <ItemPopupCartDetail product={product} />)
                }
            </ListGroup>
        </>
    );
};

export default ItemPopupCartDetailContainer;
