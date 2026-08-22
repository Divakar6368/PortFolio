import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/footer";



const inter=Inter({subsets:['latin']});



export const metadata: Metadata = {
  title: "Divakar Patel | FullStack Developer",
  description: "Fullstack developer specializing in modern web technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className}`}
    >
      <body className="min-h-full flex flex-col">
        
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
        </body>
    </html>
  );
}
