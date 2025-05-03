import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

// Simple in-memory lock
let isWriting = false;
const writeLock = {
  acquire: () => {
    if (isWriting) return false;
    isWriting = true;
    return true;
  },
  release: () => {
    isWriting = false;
  }
};

export async function POST(request: Request) {
  try {
    if (!writeLock.acquire()) {
      return NextResponse.json(
        { error: 'Sistema ocupado, tente novamente em alguns segundos' },
        { status: 429 }
      );
    }

    const data = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'noticias.json');
    
    // Validate required fields
    if (!data.titulo || !data.descricao || !data.data || !data.slug) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Read current file
    const fileContents = await fs.readFile(filePath, 'utf8');
    const currentData = JSON.parse(fileContents);

    // Create backup
    await fs.writeFile(
      path.join(process.cwd(), 'data', 'noticias.bkp.json'),
      fileContents
    );

    // Check for duplicate slug
    const existingNews = currentData.noticias.find(
      (n: any) => n.slug === data.slug && n.id !== data.id
    );
    if (existingNews) {
      data.slug = `${data.slug}-${Date.now()}`;
    }

    // Update or add new news
    if (data.id) {
      const index = currentData.noticias.findIndex((n: any) => n.id === data.id);
      if (index >= 0) {
        currentData.noticias[index] = { ...currentData.noticias[index], ...data };
      }
    } else {
      data.id = `${new Date().toISOString().split('T')[0]}-${Math.random().toString(36).substr(2, 6)}`;
      currentData.noticias.unshift(data);
    }

    // Write updated file
    await fs.writeFile(filePath, JSON.stringify(currentData, null, 2));

    writeLock.release();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    writeLock.release();
    console.error('Error updating news:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar notícia' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    if (!writeLock.acquire()) {
      return NextResponse.json(
        { error: 'Sistema ocupado, tente novamente em alguns segundos' },
        { status: 429 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID da notícia não fornecido' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'data', 'noticias.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const currentData = JSON.parse(fileContents);

    // Create backup
    await fs.writeFile(
      path.join(process.cwd(), 'data', 'noticias.bkp.json'),
      fileContents
    );

    // Remove news
    currentData.noticias = currentData.noticias.filter((n: any) => n.id !== id);

    // Write updated file
    await fs.writeFile(filePath, JSON.stringify(currentData, null, 2));

    writeLock.release();
    return NextResponse.json({ success: true });
  } catch (error) {
    writeLock.release();
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { error: 'Erro ao excluir notícia' },
      { status: 500 }
    );
  }
}