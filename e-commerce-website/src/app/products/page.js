"use client";
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:3000/api/products', {
        cache: 'no-store',
      });
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setCurrentProduct(product); 
    setIsEditing(true); 
  };

  const handleUpdate = async () => {
    if (!currentProduct) return; 
  
    try {
      const response = await axios.put(`http://localhost:3000/api/products/${currentProduct.id}`, currentProduct); // تأكد من إضافة المعرف
      if (response.status === 200) {
        console.log('Product updated successfully');
        setIsEditing(false);
        const res = await axios.get('http://localhost:3000/api/products', {
          cache: 'no-store',
        });
        setProducts(res.data);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct(prev => ({ ...prev, [name]: value })); 
  };

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Explore our products." />
      </Head>
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center mt-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <Link href={`/products/${product.id}`}>
                <img 
                  src={product.image || 'https://via.placeholder.com/300'} 
                  alt={product.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">{product.name}</h2>
                  <p className="text-gray-700">Price: ${product.price}</p>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </Link>
              <div className="flex justify-between p-4 bg-gray-50">
                <button 
                  onClick={() => handleEdit(product)} 
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                {/* Uncomment to enable delete functionality */}
                {/* <button 
                  onClick={() => handleDelete(product.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {isEditing && currentProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
              <input
                type="text"
                name="name"
                value={currentProduct.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="number"
                name="price"
                value={currentProduct.price}
                onChange={handleChange}
                placeholder="Price"
                className="border p-2 mb-2 w-full"
              />
              <textarea
                name="description"
                value={currentProduct.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-2 mb-2 w-full"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
