import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20 mt-18" id="contact">
      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Us | Avodal Technology</title>
        <meta
          name="description"
          content="Get in touch with Avodal Technology in Kisumu, Kenya. Call us at +254 711 111 111 or email info@avodaltechnology.com for IT support, networking, CCTV, and software solutions."
        />
        <meta
          name="keywords"
          content="Avodal Technology contact, IT support Kisumu, networking services Kenya, CCTV installation Kenya, software solutions contact"
        />
        <link rel="canonical" href="https://www.avodaltech.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Avodal Technology" />
        <meta
          property="og:description"
          content="Reach Avodal Technology — your trusted partner for IT, networking, CCTV, and software solutions in Kenya."
        />
        <meta property="og:url" content="https://www.avodaltech.com/contact" />
        <meta
          property="og:image"
          content="https://newolosko23.github.io/avodal/stock7.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Avodal Technology" />
        <meta
          name="twitter:description"
          content="Call, email, or visit Avodal Technology in Kisumu for all your IT and technology needs."
        />
        <meta
          name="twitter:image"
          content="https://newolosko23.github.io/avodal/stock7.jpg"
        />

        {/* Local Business Schema (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Avodal Technology",
            image: "https://newolosko23.github.io/avodal/stock7.jpg",
            url: "https://www.avodaltech.com",
            telephone: "+254711111111",
            email: "info@avodaltechnology.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kisumu",
              addressLocality: "Kisumu",
              addressCountry: "Kenya",
            },
            sameAs: [
              "https://www.facebook.com/avodaltech",
              "https://www.linkedin.com/company/avodaltech",
              "https://twitter.com/avodaltech",
            ],
          })}
        </script>
      </Helmet>

      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions, project ideas, or just want to say hi? We’d love to
          hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 p-3 rounded-2xl">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">info@avodaltechnology.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-2xl">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+254 711 111 111</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-2xl">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">Kisumu, Kenya</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
