import { useState } from "react";
import { Search, Download, FileText } from "lucide-react";
import { resources } from "../Data/Resources";
import { Helmet } from "react-helmet-async";

const Resource = () => {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((res) =>
    res.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12 mt-16">
      {/* SEO Helmet */}
      <Helmet>
        <title>Resource Center | Avodal Technology</title>
        <meta
          name="description"
          content="Explore Avodal Technology's Resource Center — articles, tutorials, downloads, and guides on IT, software, networking, CCTV, and digital transformation."
        />
        <meta
          name="keywords"
          content="Avodal Technology resources, IT guides, tutorials, free downloads, CCTV resources, networking guides, software tips, tech articles Kenya"
        />
        <link rel="canonical" href="https://www.avodaltech.com/resources" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Resource Center | Avodal Technology"
        />
        <meta
          property="og:description"
          content="Stay ahead in technology with Avodal's Resource Center. Access articles, tutorials, and downloadable resources on IT solutions, networking, CCTV, and software."
        />
        <meta
          property="og:image"
          content="https://newolosko23.github.io/avodal/stock7.jpg"
        />
        <meta
          property="og:url"
          content="https://www.avodaltech.com/resources"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Resource Center | Avodal Technology"
        />
        <meta
          name="twitter:description"
          content="Browse Avodal Technology's tech resource hub — tutorials, downloads, and guides to boost your IT knowledge."
        />
        <meta
          name="twitter:image"
          content="https://newolosko23.github.io/avodal/stock7.jpg"
        />
      </Helmet>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Resource Center
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our collection of articles, tutorials, and downloadable
          resources to help you stay ahead in technology.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles, guides, downloads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {res.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{res.description}</p>

              {/* Action Button */}
              <div className="mt-4">
                {res.type === "download" ? (
                  <a
                    href={res.file}
                    download
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                  >
                    <Download className="w-5 h-5 mr-2" /> Download
                  </a>
                ) : (
                  <a
                    href={res.link}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition"
                  >
                    <FileText className="w-5 h-5 mr-2" /> Read More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty Search State */}
      {filteredResources.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No resources found. Try a different search.
        </p>
      )}
    </div>
  );
};

export default Resource;
