import { RevealOnScroll } from "../RevealOnScroll";
import profilePicture from "../../assets/Graduation.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={profilePicture}
                alt="Allen Jefferson Orcino"
                className="w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Allen Jefferson Orcino
              </h1>

              <p className="text-gray-400 mt-3">
                Alabang, Muntinlupa City, Philippines
              </p>

              <p className="text-blue-400 font-medium mt-2">
                Aspiring Software Engineer | Frontend Developer
              </p>

              <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Bachelor of Science in Information Technology graduate
                  aspiring to build innovative, scalable, and user-focused
                  digital solutions. Experienced in frontend development and
                  modern web technologies, with proficiency in JavaScript,
                  React, Tailwind CSS, PHP, C++, and Python. Committed to
                  continuous learning, problem-solving, and delivering
                  high-quality software that creates meaningful value for users
                  and organizations.
                </p>
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <a
                  href="#project"
                  className="bg-blue-500 text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border border-gray-600 text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
