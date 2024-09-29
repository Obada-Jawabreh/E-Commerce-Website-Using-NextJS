// src/app/page.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | E-commerce</title>
        <meta name="description" content="Welcome to our E-commerce store" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <h1 className="text-5xl font-extrabold">Welcome to Our Store</h1>
        <p className="mt-4 text-lg">Shop the best products here!</p>
        <nav className="mt-8">
          <Link href="/products" className="mr-6 text-lg bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Products</Link>
          <Link href="/about" className="text-lg bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition">About Us</Link>
        </nav>
      </div>
    </>
  );
}
