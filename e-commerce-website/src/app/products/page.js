// src/app/products/page.js
import Link from 'next/link';
import Head from 'next/head';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse our products." />
      </Head>
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center mt-8">Products</h1>
        <ul className="mt-4 space-y-4">
          {products.map(product => (
            <li key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <Link href={`/products/${product.id}`} className="text-blue-600 text-lg font-semibold">
                {product.name} - ${product.price}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
