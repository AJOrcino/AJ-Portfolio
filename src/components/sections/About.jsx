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
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              About Me
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Building thoughtful software with curiosity and purpose
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-10">
            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              Hi, I’m Allen Jefferson C. Orcino, a Bachelor of Science in
              Information Technology graduate aspiring to build innovative and
              user-centered digital solutions. With a foundation in frontend and
              backend development, I work with technologies such as HTML, CSS,
              JavaScript, React, Tailwind CSS, PHP, Python, C#, C++, and MySQL.
              I’m passionate about creating efficient, scalable, and responsive
              applications while continuously strengthening my technical and
              professional skills.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <h3 className="mb-4 text-xl font-semibold text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <h3 className="mb-4 text-xl font-semibold text-white">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <h3 className="mb-4 text-xl font-semibold text-white">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      <i className={tech.icon}></i>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <h3 className="mb-4 text-center text-xl font-semibold text-white">Education</h3>
              <div className="space-y-2 text-slate-300">
                <div>
                  <strong className="text-cyan-300">Elementary</strong> - Alabang Elementary School (2010-2016)
                </div>
                <div>
                  <strong className="text-cyan-300">Junior High School</strong> - San Roque Catholic School (2016-2020)
                </div>
                <div>
                  <strong className="text-cyan-300">Senior High School</strong> - STI College Alabang (2020-2022)
                </div>
                <div className="ml-4">
                  Strand: Information Technology Mobile Application and Web Development
                </div>
                <div>
                  <strong className="text-cyan-300">College</strong> - Pamantasan ng Lungsod ng Muntinlupa (2022-2026)
                </div>
                <div className="ml-4">
                  Course: Bachelor of Science in Information Technology
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <h3 className="mb-4 text-center text-xl font-semibold text-white">Internship</h3>
              <div className="space-y-3 text-slate-300">
                <div>
                  <strong className="text-cyan-300">Company:</strong> Teknowserv
                  <br />
                  (2025-2026)
                </div>
                <div>
                  <strong className="text-cyan-300">Role:</strong> IT Intern
                </div>
                <div>
                  <strong className="text-cyan-300">Experience:</strong>
                  <ul className="ml-5 mt-2 list-disc space-y-1">
                    <li>Developed and assisted in creating the company website using modern web technologies.</li>
                    <li>Assisted in technical tasks such as wiring installation and setup.</li>
                    <li>Helped in installation and maintenance of biometric systems.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-6 text-center text-2xl font-semibold text-white">
              Academic Projects
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <h4 className="mb-2 text-lg font-semibold text-cyan-300">
                  Senior High School Research
                </h4>
                <h5 className="mb-2 text-xl font-bold text-white">Emperia</h5>
                <p className="mb-3 text-sm text-slate-400">
                  STI College Alabang (2021 - 2022)
                </p>

                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  <span className="font-semibold text-cyan-200">Emperia</span>{" "}
                  is a custom-built educational livestreaming and learning management system developed for STI College Alabang, addressing the limitations of the school’s existing system through synchronous and asynchronous learning solutions.
                </p>

                <div className="mt-auto space-y-2 text-slate-300">
                  <p>
                    <strong className="text-cyan-200 text-sm">Key Features:</strong>
                  </p>
                  <ul className="ml-4 list-disc space-y-1 text-xs">
                    <li>Dual-Mode Learning Platform (Live & Pre-recorded)</li>
                    <li>Integrated Assignment Management System</li>
                    <li>Office 365 Single Sign-On Integration</li>
                    <li>Guest Access for School Events</li>
                  </ul>
                </div>

                <div className="mt-3 text-xs text-slate-400">
                  <span className="font-medium text-cyan-200">Tech Stack:</span>{" "}
                  React, TypeScript, Python, MongoDB, Tailwind CSS, Office 365 API
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <h4 className="mb-2 text-lg font-semibold text-cyan-300">
                  College Capstone
                </h4>
                <h5 className="mb-2 text-xl font-bold text-white">
                  ClassTrack Pro
                </h5>
                <p className="mb-3 text-sm text-slate-400">
                  Pamantasan ng Lungsod ng Muntinlupa (2025 - 2026)
                </p>

                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  <span className="font-semibold text-cyan-200">ClassTrack Pro</span>{" "}
                  is an AI-integrated web-based digital classroom management system for PLMun that automates administrative tasks, delivers real-time insights into classroom dynamics, and enhances decision-making through artificial intelligence.
                </p>

                <div className="mt-auto space-y-2 text-slate-300">
                  <p>
                    <strong className="text-cyan-200 text-sm">Core Features:</strong>
                  </p>
                  <ul className="ml-4 list-disc space-y-1 text-xs">
                    <li>AI-Powered Performance Insights with OpenAI</li>
                    <li>CT-BOT Intelligent Chatbot Assistant (RAG)</li>
                    <li>Real-Time Facility Monitoring</li>
                    <li>Role-Based Access Control</li>
                  </ul>
                </div>

                <div className="mt-3 text-xs text-slate-400">
                  <span className="font-medium text-cyan-200">Tech Stack:</span>{" "}
                  React (Vite), TypeScript, Python (FastAPI), Tailwind CSS, PostgreSQL, OpenAI API
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
