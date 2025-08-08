// components/Footer.tsx
import React from "react";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Using react-icons for better a11y


const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300 py-16 px-6 sm:px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
      
      {/* Brand Info & Copyright */}
      <div className="flex flex-col space-y-4 md:col-span-1">
        <h2 className="text-3xl font-extrabold text-white">Samten's Carpet</h2>
        <p className="text-sm">
          Exquisite, handcrafted carpets for a touch of elegance in every space.
        </p>
        <div className="mt-auto pt-6 text-sm">
          © {new Date().getFullYear()} Samten's Carpet. All rights reserved.
        </div>
      </div>

      {/* Navigation Links */}
      <div className="md:col-span-1">
        <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          <li><Link href="/about" className="hover:text-white transition-colors duration-200 ease-in-out">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-white transition-colors duration-200 ease-in-out">Contact</Link></li>
          <li><Link href="/privacy" className="hover:text-white transition-colors duration-200 ease-in-out">Privacy Policy</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="md:col-span-1">
        <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase">Contact Us</h4>
        <p className="text-sm">
          Email: sam10carpet@gmail.com<br />
          Phone: 0097714914837<br />
          Address: Boudha Tinchuli, Kathmandu, Nepal
        </p>
      </div>

      {/* Social Media & Newsletter */}
      <div className="md:col-span-1">
        <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase">Follow Us</h4>
        <div className="flex gap-6 mb-6">
          <a href="https://x.com/TenzinKhedup17" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.facebook.com/samten.carpet.9/" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-200">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/ten_khedup/" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-200">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">
          Stay up-to-date with our latest collections.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;