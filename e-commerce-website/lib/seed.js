

import mongoose from 'mongoose';
import connectDB from './db.js'; // استيراد الاتصال بقاعدة البيانات
import Product from './productModel.js'; // استيراد موديل المنتج


const products = [
    { name: 'Product 1', price: 100, description: 'Description for Product 1' },
    { name: 'Product 2', price: 150, description: 'Description for Product 2' },
    { name: 'Product 3', price: 200, description: 'Description for Product 3' },
    { name: 'Product 4', price: 250, description: 'Description for Product 4' },
    { name: 'Product 5', price: 300, description: 'Description for Product 5' },
    { name: 'Product 6', price: 350, description: 'Description for Product 6' },
    { name: 'Product 7', price: 400, description: 'Description for Product 7' },
    { name: 'Product 8', price: 450, description: 'Description for Product 8' },
    { name: 'Product 9', price: 500, description: 'Description for Product 9' },
    { name: 'Product 10', price: 550, description: 'Description for Product 10' },
  ];
  
  // إضافة المنتجات إلى قاعدة البيانات
  const addProducts = async () => {
    try {
      await Product.insertMany(products);
      console.log('Products added successfully!');
      process.exit(); // إنهاء العملية بعد الإدخال الناجح
    } catch (error) {
      console.error('Error adding products:', error);
      process.exit(1); // إنهاء العملية في حالة الخطأ
    }
  };
  
  // الاتصال بقاعدة البيانات وإضافة المنتجات
  const start = async () => {
    await connectDB(); // الاتصال بقاعدة البيانات
    await addProducts(); // إضافة المنتجات
  };
  
  start();