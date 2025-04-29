import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message, newsletter } = await request.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, e-mail e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'coopcam@coopcam.coop.br',
      subject: `Nova mensagem de ${name} via site COOPCAM`,
      html: `
        <h3>Nova mensagem de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        <p><strong>E-mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <p><strong>Deseja receber novidades:</strong> ${newsletter ? 'Sim' : 'Não'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}