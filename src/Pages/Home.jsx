import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Wifi,
  Laptop,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";
import Hero from "../assets/1.svg";
import Why from "../assets/2.svg";
import Onboarding from "./Onboarding";

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Powering Your Digital World, <br /> Securing Your Space.
            </h1>
            <p className="mt-6 text-lg text-indigo-100">
              Avodal Technology delivers{" "}
              <span className="font-semibold">end-to-end IT solutions</span> —
              from networking and CCTV installations to{" "}
              <span className="font-semibold">websites & software</span>. We
              empower businesses with secure, reliable, and modern technology.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/our-services"
                className="px-3 py-1 text-center grid place-items-center md:px-6 md:py-3 bg-white text-indigo-700 rounded-xl shadow hover:bg-gray-100 font-medium"
              >
                Explore Services
              </Link>
              <Link
                to="/contact-us"
                className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-indigo-700 font-medium"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={Hero} alt="Tech Solutions" className="" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-indigo-700">100+</h2>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-indigo-700">50+</h2>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-indigo-700">10+</h2>
            <p className="text-gray-600 mt-2">Industries Served</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-indigo-700">24/7</h2>
            <p className="text-gray-600 mt-2">Support Availability</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <ShieldCheck size={40} />,
              title: "CCTV Installation",
              desc: "Secure businesses and homes with professional CCTV & monitoring setups.",
              link: "/our-services/cctv",
            },
            {
              icon: <Wifi size={40} />,
              title: "Networking Solutions",
              desc: "Design and deployment of robust wired & wireless networks.",
              link: "/our-services/networking",
            },
            {
              icon: <Laptop size={40} />,
              title: "Website & Software",
              desc: "Custom websites, web apps, and software that drive growth.",
              link: "/our-services/software",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-indigo-700 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link
                to={service.link}
                className="text-indigo-700 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Onboarding />
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={Why} alt="Why Trust Us" className="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Clients Trust Us</h2>
            <ul className="space-y-4">
              {[
                "Proven expertise in IT, networking, and security",
                "Dedicated 24/7 customer support",
                "Affordable solutions without compromise on quality",
                "Tailored services to fit each client’s needs",
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-green-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah K.",
              feedback:
                "Avodal transformed our business with a professional website and reliable network setup. Excellent work!",
            },
            {
              name: "James M.",
              feedback:
                "The CCTV installation was seamless and very professional. Now I feel more secure in my premises.",
            },
            {
              name: "Linda O.",
              feedback:
                "Their support team is always available and responsive. Truly a trusted partner in tech solutions.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-4">“{t.feedback}”</p>
              <h4 className="font-semibold text-indigo-700">- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Power Your Digital World?
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with Avodal Technology today and experience secure, modern
            IT solutions built for growth.
          </p>
          <Link
            to="/contact-us"
            className="px-8 py-4 bg-indigo-700 text-white rounded-xl shadow hover:bg-indigo-800 font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
