import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Website Development",
    description:
      "We build visually appealing and responsive websites that fit your budget, tailored for businesses, organizations, and learning institutions. From landing pages to complex portals, we ensure your online presence stands out.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "/our-services/website-development",
  },
  {
    title: "Networking Solutions",
    description:
      "From LAN and Wi-Fi setups to troubleshooting and maintenance, we provide efficient, secure, and scalable networking solutions that keep you connected at all times.",
    image: "https://newolosko23.github.io/avodal/stock7.jpg",
    link: "/our-services/networking",
  },
  {
    title: "CCTV Installation & Maintenance",
    description:
      "Secure your home, office, or business with our expert CCTV installation services. We provide high-quality surveillance systems and ongoing maintenance for round-the-clock peace of mind.",
    image:
      "https://images.unsplash.com/photo-1630200083093-2dcb3d6048fc?auto=format&fit=crop&w=800&q=80",
    link: "/our-services/cctv-installation",
  },
  {
    title: "Computer Sales & Repair",
    description:
      "We offer reliable computer hardware sales, repairs, and maintenance services. From laptops and desktops to accessories, we ensure your devices perform at their best.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    link: "/our-services/computer-sales-repair",
  },
  {
    title: "Software Solutions",
    description:
      "Need custom software? From simple automation bots to full-fledged web systems, we develop innovative, secure, and scalable solutions tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    link: "/our-services/software-solutions",
  },
  {
    title: "Graphic Design",
    description:
      "We create compelling visuals that elevate your brand identity. From logos and business cards to full branding and marketing content, our designs help you stand out in the market.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    link: "/our-services/graphic-design",
  },
];

const Services = () => {
  return (
    <>
      <>
        <Helmet>
          <title>Our Services | Avodal Technology</title>
          <meta
            name="description"
            content="Explore Avodal Technology's wide range of IT services including website development, networking, CCTV installation, software solutions, computer sales & repair, and graphic design."
          />
          <meta
            name="keywords"
            content="IT services Kenya, website development, CCTV installation, networking solutions, computer repair, software development, graphic design Kenya"
          />
          <link
            rel="canonical"
            href="https://www.avodaltech.com/our-services"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Our Services | Avodal Technology"
          />
          <meta
            property="og:description"
            content="Discover Avodal Technology’s IT solutions — from web development and networking to CCTV, software, computer repair, and branding."
          />
          <meta
            property="og:image"
            content="https://newolosko23.github.io/avodal/stock7.jpg"
          />
          <meta
            property="og:url"
            content="https://www.avodaltech.com/our-services"
          />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Our Services | Avodal Technology"
          />
          <meta
            name="twitter:description"
            content="Professional IT services in Kenya — websites, networking, CCTV, software, repairs, and design from Avodal Technology."
          />
          <meta
            name="twitter:image"
            content="https://newolosko23.github.io/avodal/stock7.jpg"
          />
        </Helmet>
      </>
      <>
        <section className="bg-gray-50 py-16 px-6 md:px-16 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              At Avodal Technology, we deliver modern, reliable, and tailored
              solutions that empower businesses and individuals. Explore our
              wide range of services designed to meet your unique technology
              needs.
            </p>

            {/* Services Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 flex-1">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Services;
