// src/app/about/page.js
import Image from 'next/image';
import Head from 'next/head';
import aboutImage from '../../public/images/about-us.jpg'; // تأكد من تحديث المسار حسب الحاجة

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold text-center mt-8">About Us</h1>
        <Image src={aboutImage} alt="About Us" width={600} height={400} className="mt-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" />
        <p className="mt-6 text-lg text-center max-w-2xl px-4">
          We are an e-commerce company dedicated to providing the best products for our customers. Our mission is to ensure customer satisfaction through quality products and exceptional service.
        </p>
        <div className="mt-8 flex space-x-4">
          <a href="/products" className="bg-white text-blue-600 px-6 py-2 rounded shadow-lg hover:bg-gray-200 transition">
            View Products
          </a>
          <a href="/contact" className="bg-white text-blue-600 px-6 py-2 rounded shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
