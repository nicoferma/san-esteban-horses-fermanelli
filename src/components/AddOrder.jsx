import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { addOrder } from "../services/Orders";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useState } from "react";

const AddOrder = ( {handleOrder} ) => {
    const { user } = useAuth();
    const { cartProducts } = useContext(CartContext);
    const [loading, setLoading] = useState(false);

    const handleAddOrder = async () => {
        setLoading(true)
        const order = await addOrder(user, cartProducts, cartProducts.reduce((ac, product) => ac + (product.price * product.quantity), 0))
        setLoading(false);
        handleOrder(order);
    }

    return (
        <>
            <Button disabled={loading} variant="secondary" className="mt-2 input-block-level form-control" onClick={handleAddOrder}>Finalizar compra</Button>
        </>
    )
}

export default AddOrder