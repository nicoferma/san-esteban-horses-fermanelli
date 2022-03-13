import { Row, Col } from "react-bootstrap";
import Login from "../components/Login";

const PageLogin = () => {
    return (
        <Row>
            <Col xs={4}>
            </Col>
            <Col xs={4}>
                <Login />
            </Col>
            <Col xs={4}>
            </Col>
        </Row>

    );
}

export default PageLogin;