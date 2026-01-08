// function Projects() {
//   return (
//     <section className="py-16 bg-gray-50" id="projects">
//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-3xl font-bold text-center text-gray-1000 mb-12">
//           My Projects
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

//           {/* Project 1 */}
//           <div className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
//             <h3 className="text-xl font-semibold text-blue-600 mb-3">
//               Student Management System
//             </h3>

//             <p className="text-gray-600 mb-4">
//               A full-stack web app to manage students, attendance, and records.
//             </p>

//             <p className="text-sm text-gray-500 mb-4">
//               React, Node.js, MySQL
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <a
//                 href="https://github.com/USERNAME/student-management-system"
//                 target="_blank"
//                 className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
//               >
//                 GitHub
//               </a>

//               <a
//                 href="#"
//                 className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
//             <h3 className="text-xl font-semibold text-blue-600 mb-3">
//               Medicine Search App
//             </h3>

//             <p className="text-gray-600 mb-4">
//               A mobile app to search medicines and view usage and precautions.
//             </p>

//             <p className="text-sm text-gray-500 mb-4">
//               Flutter, API Integration
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <a
//                 href="https://github.com/mduzair71/medicine_info_app.git"
//                 target="_blank"
//                 className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>

//           {/* Project 3 - Todo App */}
//           <div className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
//             <h3 className="text-xl font-semibold text-blue-600 mb-3">
//               Todo App
//             </h3>

//             <p className="text-gray-600 mb-4">
//               A simple Todo List app to add, delete, and manage tasks.
//             </p>

//             <p className="text-sm text-gray-500 mb-4">
//               Flutter
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <a
//                 href="https://github.com/mduzair71/todo"
//                 target="_blank"
//                 className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Projects



function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center 
        bg-gradient-to-r from-blue-600 to-purple-600 
        bg-clip-text text-transparent mb-16">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Project Card */}
          {[
            {
              title: "Student Management System",
              desc: "A full-stack web app to manage students, attendance, and records.",
              tech: "React, Node.js, MySQL",
              github: "https://github.com/USERNAME/student-management-system",
              live: "#",
            },
            {
              title: "Medicine Search App",
              desc: "A mobile app to search medicines and view usage and precautions.",
              tech: "Flutter, API Integration",
              github: "https://github.com/mduzair71/medicine_info_app.git",
            },
            {
              title: "Todo App",
              desc: "A simple Todo List app to add, delete, and manage tasks.",
              tech: "Flutter",
              github: "https://github.com/mduzair71/todo",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-[1px] 
              bg-gradient-to-r from-blue-500 to-purple-500
              hover:shadow-2xl transition duration-500"
            >
              <div
                className="h-full rounded-2xl bg-white/90 backdrop-blur-xl p-6
                transform group-hover:-translate-y-2 transition duration-500"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.desc}
                </p>

                <p className="text-sm text-gray-500 mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-5 py-2 rounded-lg text-white text-sm
                    bg-gradient-to-r from-blue-600 to-purple-600
                    hover:from-blue-700 hover:to-purple-700
                    transition-all duration-300"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      className="px-5 py-2 rounded-lg text-sm
                      border border-gray-300 text-gray-700
                      hover:bg-gray-900 hover:text-white
                      transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
