import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"

const Authenticate = ({ logreg = true }) => {
    const [loginRegister, setLoginRegister] = useState(true); //login = true - register = false

    const handleToggle = () => {
        setLoginRegister(!loginRegister);
    }

    useEffect(() => {
        setLoginRegister(logreg);
    }, [logreg]);


    return (
        <>
            {loginRegister ?
                <div className="ps-5" style={{ textAlign: 'left' }}>
                    <h3 className="text-secondary">¡Hola! Para comprar, ingresa tu usuario y contraseña</h3>
                    <Login />
                    <Button onClick={handleToggle} variant="outline-secondary" className="mt-2 input-block-level form-control">
                        No estoy registrado, quiero crear una cuenta!
                    </Button>
                </div>
                :
                <div style={{ textAlign: 'left' }}>
                    <h3 className="text-secondary">Registrate para comprar</h3>
                    <Register />
                    <Button onClick={handleToggle} variant="outline-secondary" className="mt-2 input-block-level form-control">
                        Ya estoy registrado!
                    </Button>
                </div>
            }

        </>

    )
}

export default Authenticate