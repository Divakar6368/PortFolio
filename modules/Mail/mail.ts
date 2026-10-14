"use server"

import { db } from "@/lib/db"
import type { FormValues } from "@/components/ContactForm";
import { transporter } from "@/lib/mailer";

export const mailuser = async (data: FormValues) => {
    const name = data.name.trim();
    const email = data.email.trim().toLowerCase();
    const message = data.message.trim();

    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const recentMessages = await db.mail.count({
        where: {
            email,
            createdAt: {
                gte: since,
            },
        },
    });
    if (recentMessages >= 3) {
        return {
            success: false,
            emailSent: false,
            message: "You have reached the daily message limit. Please try again later.",
        };
    }
    const mailer = await db.mail.create({
        data: {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            message: data.message.trim(),
        }
    })


    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            replyTo: email,
            subject: `New contact message from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                "",
                "Message:",
                message,
            ].join("\n"),
        });

        return {
            success: true,
            emailSent: true,
            message: "Message saved and email sent successfully",
            data: mailer,
        };
    } catch (error) {
        console.error("Contact email delivery failed:", error);
        
    }
    return {
        success: true,
        message: "Mail Send Successfully",
        data: mailer
    }

}