"use client";

import { postContact } from "@/lib/actions";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, Youtube, FileText } from "lucide-react";
import Link from "next/link";
import React, { memo, useCallback, useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  email: "",
  message: "",
};

interface AlertProps {
  onClose: () => void;
}

const SuccessAlert = ({ onClose }: AlertProps) => (
  <motion.div
    role="alert"
    className="rounded-xl border border-gray-100 bg-white p-4 mb-4 absolute right-4 top-4 z-10 shadow-md"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-start gap-4">
      <span className="text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>

      <div className="flex-1">
        <strong className="block font-medium text-gray-900">
          Thank you for contacting us!
        </strong>
        <p className="mt-1 text-sm text-gray-700">
          We have received your message and will get back to you shortly.
        </p>
      </div>

      <button
        className="text-gray-500 transition hover:text-gray-600"
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </motion.div>
);

const ContactForm = memo(() => {
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await postContact(formData);

      if (result.success) {
        setAlertVisible(true);
        setFormData(INITIAL_FORM_STATE);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAlert = useCallback(() => {
    setAlertVisible(false);
  }, []);

  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => {
        setAlertVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alertVisible]);

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {alertVisible && <SuccessAlert onClose={closeAlert} />}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-lg font-semibold text-gray-900 mb-6">
                Let&apos;s work together!
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:grandyvo76@gmail.com"
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  aria-label="Email me"
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
                  grandyvo76@gmail.com
                </a>
                <a
                  href="tel:+201023510579"
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  aria-label="Call me"
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
                <Link
                  href="https://drive.google.com/drive/folders/1TG6Q-popWh0a8sb8roTEBc-zmlwnD3mj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  aria-label="View my portfolio on Google Drive"
                >
                  <FileText className="size-6 mr-3" />
                  View My Portfolio on Drive
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                <Link
                  href="https://www.facebook.com/profile.php?id=61568972649725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@Grandy-Vo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="size-5" />
                </Link>
                <Link
                  href="https://wa.me/01023510579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="size-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/grandy_77/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;