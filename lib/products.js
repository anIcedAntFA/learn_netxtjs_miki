import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductIds = async () => {
  const products = await getProducts();

  return products.map((product) => ({
    params: {
      productid: `${product.id}`,
    },
  }));
};
