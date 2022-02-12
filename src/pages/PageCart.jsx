import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemPopupCartDetailContainer from '../components/ItemPopupCartDetailContainer';
import LoginContainer from '../components/LoginContainer';
import { CartContext } from '../contexts/CartContext';

const PageCart = () => {
    const { cartProducts } = useContext(CartContext);

    return (
        <>
            <Row className="p-4">
                <Col xs={6}>
                    <ItemPopupCartDetailContainer cartProducts={cartProducts} />
                </Col>
                <Col xs={6}>
                    <LoginContainer />
                </Col>  
            </Row>
        </>
    );
};

export default PageCart;
