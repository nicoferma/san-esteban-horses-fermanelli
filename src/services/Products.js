import products from "../assets/Products.json";

export const getProductsFromCategory = (category) => {
  return new Promise((resolve, reject) => {
    let result = [...products];
    if(category.length) {
      result = products.filter(product => product.category === category);
    } 
    return setTimeout(() => resolve(result), 2000)
  })
}
