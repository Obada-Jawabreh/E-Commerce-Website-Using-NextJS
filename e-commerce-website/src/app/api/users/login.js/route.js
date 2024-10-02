// app/api/users/login/route.js
import User from './../../../../../lib/userModel';
import dbConnect from '../../../../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response('User not found', { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response('Invalid credentials', { status: 401 });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: {
      'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600;`,
      'Content-Type': 'application/json',
    },
  });
}
