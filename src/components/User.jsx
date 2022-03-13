import { Row, Col, Form, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { updateUserData } from "../services/UsersData";
import { useState } from "react";

const User = () => {
    const { user, refreshUserData } = useAuth();
    const [ updating, setUpdating ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true)
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
            }
        }
        await updateUserData(user.uid, userData);
        await refreshUserData();
        setUpdating(false);
    }

    return (
        <div style={{ textAlign: 'left' }}>
            <Form style={{ textAlign: 'left' }} onSubmit={handleSubmit}>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-1" controlId="formFirstName">
                            <Form.Label className="m-0">Nombre:</Form.Label>
                            <Form.Control className="mb-1" name="firstName" type="text" placeholder="Nombre" defaultValue={user.firstName} />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-1" controlId="formLastName">
                            <Form.Label className="m-0">Apellido:</Form.Label>
                            <Form.Control className="mb-1" name="lastName" type="text" placeholder="Apellido" defaultValue={user.lastName} />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-1" controlId="formPhone">
                            <Form.Label className="m-0">Telefono:</Form.Label>
                            <Form.Control className="mb-1" name="phone" type="text" placeholder="Telefono" defaultValue={user.phone} />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-1 mt-2" controlId="formEmail">
                            <Form.Label className="m-0">Correo electronico:</Form.Label>
                            <Form.Control readOnly className="mb-1" name="email" type="email" placeholder="Usuario" defaultValue={user.email} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={4}>
                        <Form.Group className="mb-1" controlId="formLocationCountry">
                            <Form.Label className="m-0">Pais:</Form.Label>
                            <Form.Control className="mb-1" name="country" type="text" placeholder="Pais" defaultValue={user.location.country} />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group className="mb-1" controlId="formLocationProvince">
                            <Form.Label className="m-0">Provincia:</Form.Label>
                            <Form.Control className="mb-1" name="province" type="text" placeholder="Provincia" defaultValue={user.location.province} />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group className="mb-1" controlId="formLocationCity">
                            <Form.Label className="m-0">Ciudad:</Form.Label>
                            <Form.Control className="mb-1" name="city" type="text" placeholder="Ciudad" defaultValue={user.location.city} />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-1" controlId="formLocationStreet">
                            <Form.Label className="m-0">Calle:</Form.Label>
                            <Form.Control className="mb-1" name="street" type="text" placeholder="Calle" defaultValue={user.location.street} />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group className="mb-1" controlId="formLocationNumber">
                            <Form.Label className="m-0">Numero:</Form.Label>
                            <Form.Control className="mb-1" name="number" type="text" placeholder="Num." defaultValue={user.location.number} />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group className="mb-1" controlId="formLocationDepartment">
                            <Form.Label className="m-0">Dep.:</Form.Label>
                            <Form.Control className="mb-1" name="department" type="text" placeholder="Dep." defaultValue={user.location.department} />
                        </Form.Group>
                    </Col>
                </Row>


                <Button disabled={updating} variant="secondary" type="submit" className="mt-2 input-block-level form-control">
                    
                    {updating ? 'Actualizando...' : 'Actualizar datos'}
                </Button>
            </Form>

        </div>
    )
}

export default User