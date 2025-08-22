import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                <Shield className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold text-white">
                Avodal Technology
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Powering Your Digital World, Securing Your Space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>CCTV Installation</li>
              <li>Networking Solutions</li>
              <li>Website Development</li>
              <li>Software Solutions</li>
              <li>Computer Sales & Repair</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-400" />
                <span>+254 711 111 111</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>info@avodaltechnology.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <span>Kisumu, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Avodal Technology. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Built by{" "}
            <span className="text-indigo-400">
              <a href="/">Avodal Technology</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
