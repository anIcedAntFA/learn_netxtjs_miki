import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// import { useState, useEffect } from 'react';
import axios from 'axios';

import MainLayout from '../../components/layouts/main';

ProductsPage.Layout = MainLayout;

export default function ProductsPage({ products }) {
  // const [productList, setProductList] = useState([]);

  // const { data, error } = useSWR('https://fakestoreapi.com/products?limit=8');

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-between items-center">
      {products.map((product) => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            class=""
            src={product.image}
            alt="Sunset in the mountains"
            width={300}
            height={300}
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{product.title}</div>
            <p class="text-gray-700 text-base">{product.description}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div class="flex justify-around items-center">
              <div>
                <p>Rate: {product.rating.rate}</p>
                <p>Rate: {product.rating.count}</p>
              </div>
              <span className="font-bold text-3xl">{product.price}$</span>
            </div>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {product.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products?limit=8');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
