const CART_LS = 'cart-list';

const asyncLocalStorage = {
    setItem: (key, value) => {
        return new Promise((resolve, reject) => {
            resolve(localStorage.setItem(key, value));
        });
    },
    getItem: (key) => {
        return new Promise((resolve, reject) => {
            resolve(localStorage.getItem(key));
        });
    }
};

export const saveCart = (cart) => {
    asyncLocalStorage.setItem(CART_LS, JSON.stringify(cart));
}

export const loadCart = () => {
    return asyncLocalStorage.getItem(CART_LS)
        .then(data => JSON.parse(data) || []);
}


