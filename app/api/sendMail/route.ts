import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const gender = formData.get('gender') as string;
        const mobile = formData.get('mobile') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const resume = formData.get('resume') as File | null;
        const subject = formData.get('subject') as string;


        let attachments = [];
        if (resume) {
            const buffer = Buffer.from(await resume.arrayBuffer());
            attachments.push({
                filename: resume.name,
                content: buffer,
                contentType: resume.type,
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: subject ? subject : 'New Job Application',
            text: `Name: ${name}\nGender: ${gender}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${message}`,
            attachments,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}