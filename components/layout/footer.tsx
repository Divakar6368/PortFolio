"use client";

import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";




export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Divakar Patel</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer crafting modern web experiences with a focus on user
              experience and performance.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <a href="https://github.com/Divakar6368" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/divakar-patel-09a264333" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="mailto:divakar.dev.fullstack@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Divakar Patel
              </li>
              <li>
                <a href="mailto:divakar.dev.fullstack@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  divakar.dev.fullstack@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919625197882" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9625197882
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Divakar Patel. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}