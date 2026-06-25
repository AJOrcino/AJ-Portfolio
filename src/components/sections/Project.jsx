import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-3 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Techzone</h3>
              <p className="text-gray-400 mb-2">Semester Final Project</p>
              <p className="text-gray-400 mb-4">
                TechZone is a cutting-edge e-commerce platform specializing in
                premium computer components, laptop parts, and gaming
                accessories. Designed for builders, upgraders, and tech
                enthusiasts, we offer:
              </p>
              <div>
                {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
          
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">BESHY KO</h3>
              <p className="text-gray-400 mb-4">Self Practice</p>
              <p className="text-gray-400 mb-4">
                BESHY KO recreates the trending Pinoy emoji surprise phenomenon:
              </p>
              <div>
                {["HTML", "CSS", "JAVASCRIPT", "SWEETALERT"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
             
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Twisted Tees</h3>
              <p className="text-gray-400 mb-4">Semester Final Project</p>
              <p className="text-gray-400 mb-4">
                Twisted Tees is a rebellious online clothing store:
              </p>
              <div>
                {["HTML", "CSS", "JAVASCRIPT", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
           
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Boys Over Flowers</h3>
              <p className="text-gray-400 mb-4">Semester Final Project</p>
              <p className="text-gray-400 mb-4">
                Boys Over Flowers is an artisanal e-commerce platform
                specializing in handcrafted yarn and ribbon floral arrangements.
                Designed for wedding planners, home decorators, and
                gift-seekers,
              </p>
              <div>
                {["HTML", "CSS", "JAVASCRIPT", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Group 2</h3>
              <p className="text-gray-400 mb-4">Semester Final Project</p>
              <p className="text-gray-400 mb-4">
                Group 2 a dynamic interactive design for show case for each
                member's and info with animated
              </p>
              <div>
                {["HTML", "CSS", "JAVASCRIPT", "PHP", "SQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">TODO LIST</h3>
              <p className="text-gray-400 mb-4">Self Practice</p>
              <p className="text-gray-400 mb-4">
                A simple and interactive To-Do List application that allows
                users to add, delete, and manage daily tasks. Built with a
                user-friendly interface to help improve productivity and task
                organization.
              </p>
              <div>
                {["React", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Tic Tac Toe</h3>
              <p className="text-gray-400 mb-4">Self Practice</p>
              <p className="text-gray-400 mb-4">
                Tic-Tac-Toe is a classic strategy game played on a 3x3 grid
                where two players take turns marking spaces with "X" or "O." The
                goal is to form a row, column, or diagonal of three matching
                symbols. It's a simple yet engaging game that challenges
                strategic thinking and decision-making.
              </p>
              <div>
                {["React", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Calculator</h3>
              <p className="text-gray-400 mb-4">Self Practice</p>
              <p className="text-gray-400 mb-4">
                A simple calculator is a tool used to perform basic mathematical
                operations such as addition, subtraction, multiplication, and
                division. It typically has an easy-to-use interface, allowing
                for quick and efficient number calculations for everyday needs.
              </p>
              <div>
                {["React", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
           
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Calculating Cylinder</h3>
              <p className="text-gray-400 mb-4">Self Practice</p>
              <p className="text-gray-400 mb-4">
                Calculating a cylinder involves determining key measurements
                such as volume, surface area, and lateral area. These
                calculations typically use the cylinder’s radius and height
              </p>
              <div>
                {["C++"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
      
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">All Sorting</h3>
              <p className="text-gray-400 mb-4">Self Practice</p>
              <p className="text-gray-400 mb-4">
                Sorting is the process of arranging data in a specific order,
                typically ascending or descending. Various sorting algorithms
                exist, each with unique efficiency and use cases. Common types
                include Bubble Sort, Selection Sort, Insertion Sort, Merge Sort,
                Quick Sort, and Heap Sort. These methods help organize data for
                faster searching and processing, making them essential in
                computing and problem-solving.
              </p>
              <div>
                {["C++"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">Menu Order</h3>
              <p className="text-gray-400 mb-4">Semester Final Project</p>
              <p className="text-gray-400 mb-4">
                a simple menu ordering system that allows users to select food
                and drink items from a predefined menu, specify quantities, and
                calculate the total cost. It includes different categories such
                as Food Items and Drink Items, ensuring easy selection for
                customers. Users can make multiple orders, process payments, and
                receive change calculations.
              </p>
              <div>
                {["JAVA"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
    
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transiton">
              <h3 className="text-xl font-bold mb-2">SUDOKU</h3>
              <p className="text-gray-400 mb-4">Semester Final Project</p>
              <p className="text-gray-400 mb-4">
                Sudoku hints serve as helpful clues to guide players in filling
                the grid correctly. These hints can include pre-filled numbers,
                candidate markings, or strategic techniques like naked pairs and
                pointing pairs. By analyzing patterns and logical relationships,
                hints assist players in making informed decisions, improving
                problem-solving skills, and enhancing their overall gameplay
                experience.
              </p>
              <div>
                {["C++"].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 ml-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
           
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
