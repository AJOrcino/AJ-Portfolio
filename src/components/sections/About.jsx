import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "BOOTSTRAP",
    "REACT",
    "TAILWIND",
    "SCSS",
  ];

  const backEndSkills = [
    "PHP",
    "PYTHON",
    "SQL",
    "NODE.JS",
    "MONGODB",
    "MARIADB",
  ];

  const progammingSkills = ["PHP", "JAVA", "JAVASCRIPT", "C#", "PYTHON", "C++"];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hi, I'm Allen Jefferson C. Orcino, a College Student passionate
              about coding and technology, I specialize in HTML, CSS,
              JavaScript, C++, MySql, C#, PHP, React, Tailwind CSS, Java,
              Python. I'm always eager to learn new things and apply my skills
              to create meaningful projects. Let's build something amazing
              together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                    >
                      {tech}
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
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {progammingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
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
                  (2022-)
                </div>
                <div className="ml-4">Course: BS Information Technology</div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
