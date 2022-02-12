import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({
        user: '',
        pass: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Form style={{ textAlign: 'left' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Usuario:</Form.Label>
                <Form.Control onChange={handleChange} name="user" type="text" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control onChange={handleChange} name="pass" type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="secondary" type="submit" className="mt-2 input-block-level form-control">
                Ingresar
            </Button>
        </Form>
    );
};

export default Login;
