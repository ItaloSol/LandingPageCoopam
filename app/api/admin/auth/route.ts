import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { join } from 'path';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Senha é obrigatória' },
        { status: 400 }
      );
    }

    // For testing, compare directly with the hardcoded password
    if (password !== '$$coop$$M') {
      return NextResponse.json(
        { error: 'Senha inválida' },
        { status: 401 }
      );
    }

    // Generate JWT token valid for 30 minutes
    const token = sign({}, JWT_SECRET, { expiresIn: '30m' });

    const response = NextResponse.json({ token });

    // Set the token as an HTTP-only cookie
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1800 // 30 minutes
    });

    return response;
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Erro ao autenticar' },
      { status: 500 }
    );
  }
}