'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '' // Added phone number field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_7rxtcpo';
      const templateId = 'template_kk8f8a7';
      const publicKey = 'fPXN7jlAEk-Ufmf3a';

      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, formData, publicKey);

      setToastMessage("Thank you for your message. We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '', phone: '' }); // Reset phone field
    } catch (error) {
      console.error('Failed to send email:', error);
      setToastMessage('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      // Hide toast message after 5 seconds
      setTimeout(() => setToastMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-emerald-800"
        >
          Contact Us
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-emerald-700">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={18} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-emerald-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-emerald-700">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={18} />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-emerald-700">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-emerald-500" size={18} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your message here..."
                rows={4}
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="inline-block mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={18} />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2" size={18} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
        
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-5 right-5 bg-emerald-600 text-white px-4 py-2 rounded-md shadow-lg"
          >
            {toastMessage}
          </motion.div>
        )}

        {/* Contact Information Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-emerald-800">Get in Touch</h3>
          <p className="text-md text-emerald-700">For further inquiries, you can reach us at:</p>
          <p className="text-md text-emerald-600">Email: <a href="mailto:wdbimoindia@gmail.com" className="underline">wdbimoindia@gmail.com</a></p>
          <p className="text-md text-emerald-600">Phone: <a href="tel:+919852721697" className="underline">+919852721697</a></p>
          <p className="text-md text-emerald-600">Phone: <a href="tel:+919871838391" className="underline">+919871838391</a></p>
        </div>
      </div>
    </section>
  );
}
