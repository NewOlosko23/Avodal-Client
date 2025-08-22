import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  Server,
  Shield,
  Globe,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ brand = "Avodal Technology" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const navigate = useNavigate();

  // scroll effect for shadow/bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // 🔹 Navigation links for Avodal
  const nav = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about-us", label: "About Us", icon: Info },
    { to: "/our-services", label: "Services", icon: Server },
    { to: "/resource-center", label: "Resource Center", icon: Globe },
    { to: "/contact-us", label: "Contact", icon: Phone },
  ];

  const isActive = (to) =>
    typeof window !== "undefined" && window.location?.pathname === to;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
      }`}
      role="banner"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-white text-gray-900 px-3 py-2 rounded-md shadow"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 border border-indigo-200">
              <Shield className="h-5 w-5 text-indigo-600" />
            </span>
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              {brand}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition
                  ${
                    isActive(item.to)
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Phone className="h-4 w-4" />
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="w-full">
          <div
            className="fixed inset-0 z-40 bg-black/70 w-full"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-label="Navigation"
            className="fixed right-0 top-0 z-50 h-fit w-full max-w-2xl bg-white shadow-xl border-l border-gray-200"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-indigo-50">
              <Link to="/" className="text-lg font-semibold text-gray-900">
                {brand}
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-4 py-4 bg-indigo-50">
              <nav className="mt-4 space-y-1" aria-label="Mobile Primary">
                {nav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] text-gray-800 hover:bg-gray-50 border border-transparent hover:border-gray-200"
                    >
                      <Icon className="h-5 w-5 text-indigo-600" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6">
                <Link
                  to="/get-a-quote"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm text-white hover:bg-indigo-700"
                >
                  <Phone className="h-4 w-4" />
                  Get a Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
