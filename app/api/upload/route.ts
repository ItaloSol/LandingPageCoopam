import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'Nenhum arquivo enviado' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const bytes = await file.arrayBuffer();
    const data = new Uint8Array(bytes); // Use Uint8Array directly
    const hash = crypto.createHash('md5').update(data).digest('hex'); // Pass Uint8Array to update
    const ext = path.extname(file.name);
    const filename = `${hash}${ext}`;
    
    // Save file
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
    await writeFile(filepath, data); // Pass Uint8Array to writeFile
    
    return NextResponse.json({ 
      success: true,
      path: `/uploads/${filename}`
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Erro ao fazer upload do arquivo' },
      { status: 500 }
    );
  }
}