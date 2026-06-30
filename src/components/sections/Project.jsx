import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  const projects = [
    {
      title: "Techzone",
      type: "Semester Final Project",
      description:
        "TechZone is a cutting-edge e-commerce platform specializing in premium computer components, laptop parts, and gaming accessories.",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "BESHY KO",
      type: "Self Practice",
      description:
        "BESHY KO recreates the trending Pinoy emoji surprise phenomenon with a fun and interactive experience.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "SWEETALERT"],
    },
    {
      title: "Twisted Tees",
      type: "Semester Final Project",
      description:
        "Twisted Tees is a rebellious online clothing store built with a bold visual direction and modern web interactions.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
    },
    {
      title: "Boys Over Flowers",
      type: "Semester Final Project",
      description:
        "An artisanal e-commerce platform specializing in handcrafted yarn and ribbon floral arrangements.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
    },
    {
      title: "Group 2",
      type: "Semester Final Project",
      description:
        "A dynamic interactive showcase for each member's profile and information with animated presentation elements.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "SQL"],
    },
    {
      title: "TODO LIST",
      type: "Self Practice",
      description:
        "A simple and interactive To-Do List application that helps users manage daily tasks with a clean interface.",
      tech: ["React", "Tailwind"],
    },
    {
      title: "Title Thesis Generated",
      type: "Self Practice",
      description:
        "This tool randomly generates research title ideas for your reference or inspiration. Choose a major and create titles for thesis, capstone, or research projects in computing fields.",
      tech: ["React", "Tailwind"],
      link: "https://ajorcino.github.io/Title-Thesis-Generated-/",
    },
    {
      title: "Tic Tac Toe",
      type: "Self Practice",
      description:
        "A classic strategy game built to practice React state management and UI interactions.",
      tech: ["React", "Tailwind"],
    },
    {
      title: "Calculator",
      type: "Self Practice",
      description:
        "A lightweight calculator app that covers core arithmetic functions with a polished UI.",
      tech: ["React", "Tailwind"],
    },
    {
      title: "Calculating Cylinder",
      type: "Self Practice",
      description:
        "A small utility that demonstrates cylinder measurements such as volume and surface area.",
      tech: ["C++"],
    },
    {
      title: "All Sorting",
      type: "Self Practice",
      description:
        "A collection of sorting algorithm examples that demonstrate data organization and problem-solving techniques.",
      tech: ["C++"],
    },
    {
      title: "Menu Order",
      type: "Semester Final Project",
      description:
        "A simple menu ordering system that supports item selection, quantity handling, and total cost computation.",
      tech: ["JAVA"],
    },
    {
      title: "SUDOKU",
      type: "Semester Final Project",
      description:
        "A Sudoku-based logic game that highlights problem-solving and structured UI design.",
      tech: ["C++"],
    },
    {
      title: "Money Currency Converter",
      type: "Self Practice",
      description:
        "A responsive currency converter built with a modern and user-friendly design.",
      tech: ["React", "Tailwind"],
      link: "https://ajorcino.github.io/money-currency-/",
    },
  ];

  const linkedProjects = projects.filter((project) => project.link);
  const otherProjects = projects.filter((project) => !project.link);

  const renderProjectCard = (project, index) => (
    <div
      key={index}
      className="flex h-full flex-col rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="break-words text-2xl font-bold leading-tight text-white">
            {project.title}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-400">
          {project.type}
        </span>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 inline-flex w-fit items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          View Project →
        </a>
      ) : (
        <span className="mb-5 inline-flex w-fit items-center text-sm font-semibold text-slate-500 cursor-default">
          Coming Soon
        </span>
      )}

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((tech, key) => (
          <span
            key={key}
            className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="project"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              Projects
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              A collection of web and programming work
            </h2>
          </div>

          <div className="space-y-10">
            {linkedProjects.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-slate-800" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Live Projects
                  </h3>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {linkedProjects.map((project, index) => renderProjectCard(project, index))}
                </div>
              </div>
            )}

            {otherProjects.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-slate-800" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Other Projects
                  </h3>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {otherProjects.map((project, index) => renderProjectCard(project, index))}
                </div>
              </div>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};