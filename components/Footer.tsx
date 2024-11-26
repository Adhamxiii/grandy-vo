"use client";

import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grandy Voiceover</h3>
            <p className="text-gray-400">
              Professional voice-over services for commercials, animation, and
              corporate projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-purple-400 transition-colors focus:outline-none focus:border-none"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-400 hover:text-purple-400 transition-colors focus:outline-none focus:border-none"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-purple-400 transition-colors focus:outline-none focus:border-none"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="mailto:omora8708@gmail.com"
                className="flex items-center text-gray-400 hover:text-purple-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                omora8708@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-400 hover:text-purple-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (+20) 1023510579
              </a>
            </div>
            <div className="mt-4 flex items-center space-x-4 text-gray-400">
              <Link
                href="https://www.facebook.com/profile.php?id=61568972649725"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="size-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@Grandy-Vo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="size-5" />
              </Link>
              <Link
                href="https://wa.me/01023510579"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
              </Link>
              <Link
                href="https://www.instagram.com/grandy_77/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Grandy Voiceover. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
