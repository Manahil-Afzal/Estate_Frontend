import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-[#20211e] mt-">
      <div className="max-w-6xl mx-auto px-3 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-[#b7b9b0]">Shahand </span>
              <span className="text-[#7a806b]">Estate</span>
            </h3>
            <p className="text-[#939589] leading-relaxed">
              Your trusted partner in finding the perfect home. We make real estate dreams come true with personalized
              service and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#d2d4c7] hover:text-[#424b1e] transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#e4e6da] hover:text-[#424b1e] transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-[#d3d6c7] hover:text-[#424b1e] transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#cfd4be] hover:text-[#424b1e] transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#9ba076]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#afb0a8] hover:text-[#424b1e] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#a0a19a] hover:text-[#424b1e] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-[#acada7] hover:text-[#424b1e] transition-colors duration-300">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-[#b9bcae] hover:text-[#424b1e] transition-colors duration-300">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#a0ac6f]">Services</h4>
            <ul className="space-y-2">
              <li className="text-[#d3d6c4]">Property Sales</li>
              <li className="text-[#c1c3b8]">Property Rentals</li>
              <li className="text-[#bec0b8]">Property Management</li>
              <li className="text-[#c7c8c2]">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#929c64]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#868c6f]" />
                <span className="text-[#a9ab9e]">123 Real Estate St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#bdbeb7]" />
                <span className="text-[#afb0aa]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#b4b6ad]" />
                <span className="text-[#b0b0ad]">info@Real-estate.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#b1b5a3] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#868c6f] text-sm">© 2024 Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-[#868c6f] hover:text-[#424b1e] text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#868c6f] hover:text-[#424b1e] text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}