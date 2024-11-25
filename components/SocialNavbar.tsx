"use client";

import { motion } from "framer-motion";
import { Facebook, Youtube, Phone } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61568972649725",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Grandy-Vo",
    label: "YouTube",
  },
  { icon: Phone, href: "https://wa.me/01023510579", label: "WhatsApp" },
];

export function SocialNavbar() {
  return (
    <motion.nav
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 max-md:hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ul className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <Link href={link.href} passHref>
              <motion.div
                className="block p-3 bg-purple-800 text-white rounded-full hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
