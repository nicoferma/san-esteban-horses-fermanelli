import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
    const { signup } = useAuth();

    const [creatingUser, setCreatingUser] = useState({ creating: false, state: 0 });
    const [messageShow, setMessageShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            phone: e.target.phone.value,
            location: {
                country: e.target.country.value,
                province: e.target.province.value,
                city: e.target.city.value,
                street: e.target.street.value,
                number: e.target.number.value,
                department: e.target.department.value
            },
            role: 0,
        }
        const authData = {
            email: e.target.email.value,
            password: e.target.pass.value,
        }

        setCreatingUser({ creating: true });


        if (authData.password !== e.target.confirmPass.value) {
            setCreatingUser({ creating: false, state: 1, message: 'No coinciden las contraseñas.' });
            setMessageShow(true);
            return;
        }

        try {
            await signup(authData, userData);
            setCreatingUser({ creating: false, state: 0, message: `Usuario creado correctamente!` });
            setMessageShow(true);
        } catch (error) {
            setCreatingUser({ creating: false, state: 1, message: error.message });
            setMessageShow(true);
        }

    }

    return (
        <div style={{ textAlign: 'left' }}>
            <Form style={{ textAlign: 'left' }} onSubmit={handleSubmit}>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-1" controlId="formFirstName">
                            <Form.Label className="m-0">Nombre:</Form.Label>
                            <Form.Control className="mb-1" name="firstName" type="text" placeholder="Nombre" />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-1" controlId="formLastName">
                            <Form.Label className="m-0">Apellido:</Form.Label>
                            <Form.Control className="mb-1" name="lastName" type="text" placeholder="Apellido" />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-1" controlId="formPhone">
                            <Form.Label className="m-0">Telefono:</Form.Label>
                            <Form.Control className="mb-1" name="phone" type="text" placeholder="Telefono" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={4}>
                        <Form.Group className="mb-1" controlId="formLocationCountry">
                            <Form.Label className="m-0">Pais:</Form.Label>
                            <Form.Control className="mb-1" name="country" type="text" placeholder="Pais" />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group className="mb-1" controlId="formLocationProvince">
                            <Form.Label className="m-0">Provincia:</Form.Label>
                            <Form.Control className="mb-1" name="province" type="text" placeholder="Provincia" />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group className="mb-1" controlId="formLocationCity">
                            <Form.Label className="m-0">Ciudad:</Form.Label>
                            <Form.Control className="mb-1" name="city" type="text" placeholder="Ciudad" />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-1" controlId="formLocationStreet">
                            <Form.Label className="m-0">Calle:</Form.Label>
                            <Form.Control className="mb-1" name="street" type="text" placeholder="Calle" />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group className="mb-1" controlId="formLocationNumber">
                            <Form.Label className="m-0">Numero:</Form.Label>
                            <Form.Control className="mb-1" name="number" type="text" placeholder="Num." />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group className="mb-1" controlId="formLocationDepartment">
                            <Form.Label className="m-0">Dep.:</Form.Label>
                            <Form.Control className="mb-1" name="department" type="text" placeholder="Dep." />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-1 mt-2" controlId="formEmail">
                    <Form.Label className="m-0">Correo electronico:</Form.Label>
                    <Form.Control className="mb-1" name="email" type="email" placeholder="Usuario" />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formPassword">
                    <Form.Label className="m-0">Contraseña:</Form.Label>
                    <Form.Control className="mb-1" name="pass" type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formConfirmPassword">
                    <Form.Label className="m-0">Confirmar contraseña:</Form.Label>
                    <Form.Control className="mb-1" name="confirmPass" type="password" placeholder="Confirmar contraseña" />
                </Form.Group>

                <Button disabled={creatingUser.creating} variant="secondary" type="submit" className="mt-2 input-block-level form-control">
                    {creatingUser.creating ? 'Creando usuario...' : 'Crear Usuario'}
                </Button>
            </Form>
            {messageShow && !creatingUser.creating ?
                <Alert className="mt-2"
                    onClose={() => setMessageShow(false)}
                    variant={creatingUser.state === 0 ? "secondary" : "danger"}
                    dismissible>
                    {creatingUser.message}
                </Alert>
                : null
            }

        </div>
    );
}

export default Register