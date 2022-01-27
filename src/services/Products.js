import products from "../assets/Products.json";

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    let result = [...products];
    if(category.length) {
      result = products.filter(product => product.category === category);
    } 
    return setTimeout(() => resolve(result), 2000);
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    
    const product = products.find(product => product.id == id);

    return setTimeout(() => resolve(product), 2000);
  });
}