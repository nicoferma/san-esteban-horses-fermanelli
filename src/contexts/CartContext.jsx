import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalCartProducts, setTotalCartProducts] = useState(0);

    const addProduct = (newProduct, quantity) => {
        const product = getProductById(newProduct.id);
        if (!product) {
            newProduct.quantity = quantity;
            setCartProducts([...cartProducts, newProduct]);
        } else {
            if (product.quantity + quantity > product.stock) return false;
            product.quantity += quantity;
        }
        setTotalCartProducts(totalCartProducts + quantity);
        return true;
    }

    const removeProduct = (id) => {
        let tempCart = cartProducts.slice();
        const quantity = cartProducts.find(product => product.id === id).quantity;
        tempCart = tempCart.filter(product => product.id !== id);
        setCartProducts(tempCart);
        setTotalCartProducts(totalCartProducts - quantity);
    }

    const getProductById = (id) => cartProducts.find(product => product.id === id) || null;


    const clear = () => {
        setCartProducts([]);
        setTotalCartProducts(0);
    }

    const isInCart = (product) => getProductById(product.id) ? true : false;


    return (
        <CartContext.Provider value={{ cartProducts, totalCartProducts, addProduct, removeProduct, clear, isInCart, getProductById }} >
            {children}
        </CartContext.Provider>
    );
}