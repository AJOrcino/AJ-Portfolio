import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontEndSkills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JAVASCRIPT", icon: "fab fa-js" },
    { name: "BOOTSTRAP", icon: "fab fa-bootstrap" },
    { name: "REACT", icon: "fab fa-react" },
    { name: "TYPESCRIPT", icon: "fab fa-js" },
    { name: "TAILWIND", icon: "fab fa-css3-alt" },
  ];

  const backEndSkills = [
    { name: "PHP", icon: "fab fa-php" },
    { name: "PYTHON", icon: "fab fa-python" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "NODE.JS", icon: "fab fa-node" },
    { name: "POSTGRESQL", icon: "fas fa-database" },
    { name: "MYSQL", icon: "fas fa-database" },
    { name: "EXPRESS.JS", icon: "fab fa-node" },
  ];

  const programmingSkills = [
    { name: "PHP", icon: "fab fa-php" },
    { name: "PYTHON", icon: "fab fa-python" },
    { name: "JAVASCRIPT", icon: "fab fa-js" },
    { name: "C#", icon: "fas fa-code" },
    { name: "C++", icon: "fas fa-code" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] flex flex-col transition-all">
            <p className="text-gray-300 mb-6">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Allen Jefferson C. Orcino, a Bachelor of Science in
                Information Technology graduate aspiring to build innovative and
                user-centered digital solutions. With a foundation in frontend
                and backend development, I work with technologies such as HTML,
                CSS, JavaScript, React, Tailwind CSS, PHP, Python, C#, C++, and
                MySQL. I am passionate about creating efficient, scalable, and
                responsive applications while continuously enhancing my
                technical and professional skills.
              </p>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer flex items-center gap-2"
                    >
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer flex items-center gap-2"
                    >
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer flex items-center gap-2"
                    >
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-center">Education</h3>
              <div className="text-gray-300 space-y-2">
                <div>
                  <strong>Elementary</strong> - Alabang Elementary School
                  (2010-2016)
                </div>
                <div>
                  <strong>Junior High School</strong> - San Roque Catholic
                  School (2016-2020)
                </div>
                <div>
                  <strong>Senior High School</strong> - STI College Alabang
                  (2020-2022)
                </div>
                <div className="ml-4">
                  Strand: Information Technology Mobile Application and Web
                  Development
                </div>
                <div>
                  <strong>College</strong> - Pamantasan ng Lungsod ng Muntinlupa
                  (2022-2026)
                </div>
                <div className="ml-4">
                  Course: Bachelor of Science in Information Technology
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-center">Internship</h3>
              <div className="text-gray-300 space-y-3">
                <div>
                  <strong>Company:</strong> Teknowserv
                  <br />
                  (2025-2026)
                </div>
                <div>
                  <strong>Role:</strong> IT Intern
                </div>
                <div>
                  <strong>Experience:</strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      Developed and assisted in creating the company website
                      using modern web technologies.
                    </li>
                    <li>
                      Assisted in technical tasks such as wiring installation
                      and setup.
                    </li>
                    <li>
                      Helped in installation and maintenance of biometric
                      systems.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section - SHS and College Side by Side */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Academic Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SHS Research Project */}
              <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col h-full">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  Senior High School Research
                </h4>
                <h5 className="text-xl font-bold text-white mb-2">Emperia</h5>
                <p className="text-sm text-gray-400 mb-3">
                  STI College Alabang (2021 - 2022)
                </p>

                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  <span className="font-semibold text-blue-300">Emperia</span>{" "}
                  (Greek for "experience") is a custom-built educational
                  livestreaming and learning management system developed for STI
                  College Alabang, addressing the limitations of the school's
                  existing system through synchronous and asynchronous learning
                  solutions.
                </p>

                <div className="text-gray-300 space-y-2 mt-auto">
                  <p>
                    <strong className="text-blue-300 text-sm">
                      Key Features:
                    </strong>
                  </p>
                  <ul className="list-disc ml-4 space-y-1 text-xs">
                    <li>Dual-Mode Learning Platform (Live & Pre-recorded)</li>
                    <li>Integrated Assignment Management System</li>
                    <li>Office 365 Single Sign-On Integration</li>
                    <li>Guest Access for School Events</li>
                  </ul>
                </div>

                <div className="mt-3 text-xs text-gray-400">
                  <span className="font-medium text-blue-300">Tech Stack:</span>{" "}
                  React, TypeScript, Python, MongoDB, Tailwind CSS, Office 365
                  API
                </div>
              </div>

              {/* College Capstone Project */}
              <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col h-full">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  College Capstone
                </h4>
                <h5 className="text-xl font-bold text-white mb-2">
                  ClassTrack Pro
                </h5>
                <p className="text-sm text-gray-400 mb-3">
                  Pamantasan ng Lungsod ng Muntinlupa (2025 - 2026)
                </p>

                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  <span className="font-semibold text-blue-300">
                    ClassTrack Pro
                  </span>{" "}
                  is an AI-integrated web-based digital classroom management
                  system for PLMun that automates administrative tasks, delivers
                  real-time insights into classroom dynamics, and enhances
                  decision-making through artificial intelligence.
                </p>

                <div className="text-gray-300 space-y-2 mt-auto">
                  <p>
                    <strong className="text-blue-300 text-sm">
                      Core Features:
                    </strong>
                  </p>
                  <ul className="list-disc ml-4 space-y-1 text-xs">
                    <li>AI-Powered Performance Insights with OpenAI</li>
                    <li>CT-BOT Intelligent Chatbot Assistant (RAG)</li>
                    <li>Real-Time Facility Monitoring</li>
                    <li>Role-Based Access Control</li>
                  </ul>
                </div>

                <div className="mt-3 text-xs text-gray-400">
                  <span className="font-medium text-blue-300">Tech Stack:</span>{" "}
                  React (Vite), TypeScript, Python (FastAPI), Tailwind CSS,
                  PostgreSQL, OpenAI API
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
