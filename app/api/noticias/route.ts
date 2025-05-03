import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export const dynamic = "force-static";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'noticias.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading news:', error);
    // Return empty array instead of error to prevent HTML error page
    return NextResponse.json([], { status: 200 });
  }
}