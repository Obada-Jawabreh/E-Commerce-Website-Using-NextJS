import Product from "../../../../lib/productModel";
import connectDB from "../../../../lib/db";

export async function GET(request) {
  try {
    await connectDB();  // تأكد من الاتصال بقاعدة البيانات
    const products = await Product.find();  // إحضار المنتجات من قاعدة البيانات
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response('Error fetching products', { status: 500 });
  }
}


export async function PUT(request) {
  const { id, name, price, description } = await request.json(); // تأكد من أنك تستقبل id من الجسم

  try {
    await connectDB(); // تأكد من الاتصال بقاعدة البيانات
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      price,
      description,
    }, { new: true });

    if (!updatedProduct) {
      return new Response('Product not found', { status: 404 });
    }

    return new Response(JSON.stringify(updatedProduct), { status: 200 }); // أعد المنتج المحدث
  } catch (error) {
    console.error('Error updating product:', error);
    return new Response('Error updating product', { status: 500 });
  }
}
