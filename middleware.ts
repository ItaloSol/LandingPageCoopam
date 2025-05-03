import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function middleware(request: NextRequest) {
  // Skip middleware for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Only run middleware for admin routes
  if (!request.nextUrl.pathname.startsWith('/administrador')) {
    return NextResponse.next();
  }

  // Allow access to login page
  if (request.nextUrl.pathname === '/administrador') {
    return NextResponse.next();
  }

  const token = request.cookies.get('adminToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/administrador', request.url));
  }

  try {
    verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    // If token is invalid, redirect to login
    return NextResponse.redirect(new URL('/administrador', request.url));
  }
}

export const config = {
  matcher: ['/administrador/:path*']
};