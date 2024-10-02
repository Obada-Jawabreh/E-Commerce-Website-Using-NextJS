// app/api/users/signup/route.js
import User from './../../../../../lib/userModel';
import dbConnect from '../../../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request) {
    try {
      await connectDB(); // تأكد من الاتصال بقاعدة البيانات
  
      const { first_name, last_name, email, password } = await request.json();
  
      // تشفير كلمة المرور قبل حفظها
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword, 
      });
  
      await newUser.save(); // حفظ المستخدم في قاعدة البيانات
      return new Response('User created successfully', { status: 201 });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user', { status: 500 });
    }
  }
