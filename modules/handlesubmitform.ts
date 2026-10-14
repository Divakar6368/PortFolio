
"use client";
import { toast } from "sonner";
import { mailuser } from "./Mail/mail"
import type { FormValues } from "@/components/ContactForm";

export const submission = async (data: FormValues) => {

    try {
      
        const result = await mailuser(data);
        if (result.success) {
            toast.success("Mail Send successfully!");
        }
    } catch (error) {
        console.error("Error claiming link:", error);
        toast.error("Failed to send mail. Please try again.");
    }
}