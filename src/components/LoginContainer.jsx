import { Form, Row, Col, Button } from "react-bootstrap";
import Login from "./Login";

const LoginContainer = () => {
    return (
        <>
            <Row>
                <Col xs={6}>
                    <h2>CLIENTE NUEVO</h2>
                </Col>
                <Col xs={6}>
                    <h2>YA SOY CLIENTE</h2>
                    <Login />
                </Col>
            </Row>

        </>
    );
};

export default LoginContainer;
