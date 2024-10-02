"use client"; 
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import axios from 'axios';

const ProductDetails = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError('Failed to fetch product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error || !product) {
    return (
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
    );
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-2 text-lg">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">Price: ${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
