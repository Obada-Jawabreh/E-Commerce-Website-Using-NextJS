// src/app/products/[id]/page.js
"use client"; // Ensure this file is a Client Component

import { useRouter } from 'next/navigation';
import Head from 'next/head';

const productDetails = {
  1: { name: 'Product 1', price: 100, description: 'This is a great product.' },
  2: { name: 'Product 2', price: 200, description: 'This is an even better product.' },
};

const ProductDetails = ({ params }) => {
  const { id } = params; 
  const product = id ? productDetails[id] : null;

  return (
    <>
      <Head>
        <title>{product ? product.name : 'Product Not Found'}</title>
        <meta name="description" content={product ? product.description : 'Product not found.'} />
      </Head>
      <div className="p-4">
        {product ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-lg">{product.description}</p>
            <p className="mt-4 text-xl font-semibold">Price: ${product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add to Cart</button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">Product Not Found</h1>
            <p>We couldn't find the product you were looking for.</p>
            <button 
              onClick={() => window.history.back()} 
              className="mt-4 bg-gray-300 text-black px-4 py-2 rounded"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
