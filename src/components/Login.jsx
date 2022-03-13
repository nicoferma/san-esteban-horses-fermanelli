import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        user: '',
        pass: ''
    });
    const [loggingUser, setLoggingUser] = useState(false);
    const [messageShow, setMessageShow] = useState({ show: false, message: '' });

    const { login } = useAuth();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoggingUser(true);
        setMessageShow({ show: false });


        try {
            await login(inputs.user, inputs.pass);
            setLoggingUser(false);
            //navigate("/add-product");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoggingUser(false);
            setMessageShow({ show: true, message: `${errorCode} - ${errorMessage}` });
        }
    }

    return (
        <div style={{ textAlign: 'left' }}>
            <Form  className="mt-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label >Usuario:</Form.Label>
                    <Form.Control onChange={handleChange} name="user" type="email" placeholder="Usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control onChange={handleChange} name="pass" type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button disabled={loggingUser} variant="secondary" type="submit" className="mt-2 input-block-level form-control">
                    {loggingUser ? 'Ingresando...' : 'Ingresar'}
                </Button>
            </Form>
            {messageShow.show ?
                <Alert className="mt-2"
                    onClose={() => setMessageShow({ show: false })}
                    variant="danger"
                    dismissible>
                    {messageShow.message}
                </Alert>
                : null
            }

        </div>
    );
};

export default Login;
