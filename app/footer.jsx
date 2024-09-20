import Link from "next/link";
import { FaHome,FaCar ,FaUser, FaQuestionCircle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <FaCar></FaCar>
              <li>
                <Link href="/" className="hover:text-yellow-400 flex items-center">
                  <FaHome className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link href="/course" className="hover:text-yellow-400 flex items-center">
                  <FaUser className="mr-2" /> Course
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-yellow-400 flex items-center">
                  <FaUser className="mr-2" /> Registration
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-yellow-400 flex items-center">
                  <FaQuestionCircle className="mr-2" /> FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Daniel Car Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
