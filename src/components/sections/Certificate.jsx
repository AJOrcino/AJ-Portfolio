import { useState } from "react";
import certificate1 from "../../assets/Orcino-HTML.png";
import certificate2 from "../../assets/Orcino-PHP.png";
import certificate3 from "../../assets/Kali-bright.jpg";
import { RevealOnScroll } from "../RevealOnScroll";

export const Certificate = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      imageUrl: certificate1,
      alt: "Certificate 1",
      title: "Front End Development - HTML",
    },
    {
      id: 2,
      imageUrl: certificate2,
      alt: "Certificate 2",
      title: "PHP for Beginners",
    },
    {
      id: 3,
      imageUrl: certificate3,
      alt: "Certificate 3",
      title: "Kali-Bright",
    },
  ];

  const handleImageClick = (certificate) => {
    setSelectedImage(certificate);
    setIsExpanded(true);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
    setSelectedImage(null);
  };

  return (
    <>
      <RevealOnScroll>
        <section
          id="certi"
          className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
        >
          <div className="max-w-5xl mx-auto px-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col cursor-pointer"
                  onClick={() => handleImageClick(certificate)}
                >
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.alt}
                    className="w-full h-auto object-contain max-h-64 md:max-h-none"
                  />
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-gray-300 text-center">
                      {certificate.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {isExpanded && selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center transition-opacity duration-300"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-lg max-h-lg overflow-auto rounded-lg shadow-lg bg-gray-900 px-8 py-10 flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-red-500 hover:text-red-600 focus:outline-none"
              onClick={handleCloseModal}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.293a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.alt}
              className="w-auto h-auto object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};
