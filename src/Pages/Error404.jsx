import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const Error404 = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20 mt-16">
      <div className="max-w-2xl w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <p className="text-md font-semibold text-indigo-700 mb-2 text-center">
            Error 404
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            We can’t find that page.
          </h1>
          <p className="mt-3 text-gray-600">
            The page you’re looking for may have been moved, deleted, or the URL
            might be misspelled.
          </p>

          {/* Search (optional wire-up) */}
          <div className="mt-6">
            <label htmlFor="site-search" className="sr-only">
              Search site
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="site-search"
                type="text"
                placeholder="Search our site…"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Tip: Try keywords like “services”, “contact”, or “pricing”.
            </p>
          </div>

          {/* Quick actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-3 text-white font-medium hover:bg-indigo-800 transition"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Helpful links */}
          <div className="mt-6 text-sm text-gray-600">
            Or jump to:
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/our-services"
                className="inline-flex items-center rounded-full border px-3 py-1.5 hover:bg-gray-50"
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center rounded-full border px-3 py-1.5 hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full border px-3 py-1.5 hover:bg-gray-50"
              >
                Contact
              </Link>
              <Link
                to="/resource-center"
                className="inline-flex items-center rounded-full border px-3 py-1.5 hover:bg-gray-50"
              >
                Resource Center
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle illustration / brand area */}
        <div className="mt-8 text-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60"
            alt="Technology illustration"
            className="w-full h-40 object-cover rounded-2xl shadow-md"
          />
          <p className="mt-3 text-xs text-gray-500">
            © {new Date().getFullYear()} Avodal Technology
          </p>
        </div>
      </div>
    </main>
  );
};

export default Error404;
