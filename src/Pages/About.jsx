import { Helmet } from "react-helmet-async";
import { Shield, Globe, Server, Cpu } from "lucide-react";

const About = () => {
  return (
    <div className="mt-18">
      <>
        <>
          <Helmet>
            {/* Title & Description */}
            <title>About Us | Avodal Technology</title>
            <meta
              name="description"
              content="Learn more about Avodal Technology — our mission, vision, and services in IT, networking, CCTV, and software. We empower communities and businesses across Africa with secure, modern solutions."
            />
            <meta
              name="keywords"
              content="Avodal Technology, About Avodal, IT company Kenya, CCTV installation, networking solutions, software development, web design Kenya"
            />
            <link rel="canonical" href="https://www.avodaltech.com/about-us" />

            {/* Open Graph / Facebook */}
            <meta
              property="og:title"
              content="About Avodal Technology | IT & Security Solutions"
            />
            <meta
              property="og:description"
              content="Discover Avodal Technology's mission, vision, and expertise in IT solutions — CCTV, networking, software, and digital services."
            />
            <meta
              property="og:image"
              content="https://newolosko23.github.io/avodal/stock7.jpg"
            />
            <meta
              property="og:url"
              content="https://www.avodaltech.com/about-us"
            />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="About Avodal Technology | IT & Security Solutions"
            />
            <meta
              name="twitter:description"
              content="Avodal Technology delivers modern IT services in Kenya and Africa. Learn more about our mission, vision, and trusted solutions."
            />
            <meta
              name="twitter:image"
              content="https://newolosko23.github.io/avodal/stock7.jpg"
            />
          </Helmet>
        </>
        <>
          <div className="bg-gray-50">
            {/* Hero Section */}
            <section
              className="relative text-white py-20 px-6 md:px-12 bg-cover bg-center h-[75%]"
              style={{
                backgroundImage:
                  "url('https://newolosko23.github.io/avodal/stock7.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Avodal Technology
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                  Powering Your Digital World, Securing Your Space. We are
                  dedicated to delivering reliable technology solutions that
                  empower businesses, institutions, and individuals to thrive in
                  today’s digital era.
                </p>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-6 md:px-12">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To provide affordable, innovative, and secure technology
                    solutions that bridge the gap between people and the digital
                    future. We believe that technology should not just work — it
                    should transform lives and unlock opportunities.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be a trusted leader in technology services across Africa,
                    powering communities, businesses, and organizations with
                    tools that drive growth, connectivity, and security.
                  </p>
                </div>
              </div>
            </section>

            {/* What We Do */}
            <section className="bg-white py-16 px-6 md:px-12">
              <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  What We Offer
                </h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                  At Avodal Technology, we provide a wide range of technology
                  services designed to simplify your digital journey while
                  securing your operations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                  <Shield className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    CCTV & Security
                  </h3>
                  <p className="text-sm text-gray-600">
                    Reliable surveillance and monitoring solutions to protect
                    your assets and ensure peace of mind.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                  <Server className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Networking</h3>
                  <p className="text-sm text-gray-600">
                    From small offices to large enterprises, we design and
                    implement seamless connectivity solutions.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                  <Globe className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Web Solutions</h3>
                  <p className="text-sm text-gray-600">
                    Custom websites, apps, and SEO strategies to build your
                    online presence and engage your audience.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                  <Cpu className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">IT & Software</h3>
                  <p className="text-sm text-gray-600">
                    Sales, repair, and software development services that keep
                    your systems running smoothly and securely.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-6 md:px-12 bg-gray-100">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Avodal Technology?
                </h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                  We go beyond providing IT solutions — we create partnerships
                  built on trust, quality, and long-term growth.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      💡 Innovation
                    </h3>
                    <p className="text-sm text-gray-600">
                      We leverage modern technologies to create solutions that
                      meet the demands of today and the challenges of tomorrow.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      🤝 Reliability
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our clients trust us because we deliver on our promises —
                      consistently, affordably, and on time.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      🌍 Local Impact
                    </h3>
                    <p className="text-sm text-gray-600">
                      We are rooted in Kenya and dedicated to empowering
                      communities with technology that drives growth.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      </>
    </div>
  );
};

export default About;
