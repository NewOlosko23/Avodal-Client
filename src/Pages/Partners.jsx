import React from "react";

const partners = [
  {
    name: "Huawei",
    logo: "https://via.placeholder.com/150x80?text=Huawei",
    description: "Technology partner for networking and telecom solutions",
  },
  {
    name: "Cisco",
    logo: "https://via.placeholder.com/150x80?text=Cisco",
    description: "Collaboration on enterprise networking and security",
  },
  {
    name: "Dahua",
    logo: "https://via.placeholder.com/150x80?text=Dahua",
    description: "Partner in CCTV and surveillance solutions",
  },
  {
    name: "MikroTik",
    logo: "https://via.placeholder.com/150x80?text=MikroTik",
    description: "Core router and ISP networking solutions provider",
  },
];

const Partners = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At Avodal Technology, we work with leading global and local brands to
          deliver cutting-edge solutions in networking, security, and software
          development. Our partners help us bring innovation and reliability to
          every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
