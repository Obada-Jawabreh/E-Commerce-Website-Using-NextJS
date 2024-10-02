// src/app/404.js
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="This page does not exist." />
      </Head>
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <Link href="/" className="mt-4 text-blue-600">Go back to Home</Link>
      </div>
    </>
  );
};

export default Custom404;
