import { useState } from "react";
import certificate1 from "../../assets/Orcino-HTML.png";
import certificate2 from "../../assets/Orcino-PHP.png";
import certificate3 from "../../assets/Orcino-EFSET.png";
import certificate4 from "../../assets/Orcino-Cybersecurity.png";
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
      title: "EFSET English Proficiency",
    },
    {
      id: 4,
      imageUrl: certificate4,
      alt: "Certificate 4",
      title: "CyberSecurity Awareness for Education Business and Personal Safety",
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
          className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                Certificates
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Proof of skills and continuous learning
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  onClick={() => handleImageClick(certificate)}
                >
                  <div className="relative overflow-hidden rounded-[1rem] bg-slate-950/70">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.alt}
                      className="h-64 w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-slate-950/40 backdrop-blur-xl" />
                  </div>
                  <div className="pt-4">
                    <h3 className="text-center text-lg font-semibold text-slate-200">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col items-center overflow-auto rounded-[1.5rem] border border-slate-700 bg-slate-900/95 px-6 py-8 shadow-2xl shadow-cyan-500/10">
            <button
              className="absolute right-4 top-4 rounded-full p-2 text-slate-300 transition hover:bg-slate-800 hover:text-red-400"
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
            <div className="relative w-full overflow-hidden rounded-[1rem]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.alt}
                className="mx-auto max-h-[75vh] w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-slate-950/30 backdrop-blur-xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
