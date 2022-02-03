import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalCartProducts, setTotalCartProducts] = useState(0);

    const addProduct = (product, quantity) => {
        const indexProduct = cartProducts.indexOf(product)
        if (indexProduct === -1) {
            product.quantity = quantity;
            setCartProducts([...cartProducts, product]);
        } else {
            const tempCart = cartProducts.slice();
            product.quantity += quantity;
            tempCart[indexProduct] = product;
            setCartProducts(tempCart);
        }
        setTotalCartProducts(totalCartProducts + quantity);
    }

    return (
        <CartContext.Provider value={{ cartProducts, totalCartProducts, addProduct }} >
            {children}
        </CartContext.Provider>
    );
}