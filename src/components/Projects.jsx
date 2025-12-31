function Projects() {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Project 1 */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Student Management System
            </h3>

            <p className="text-gray-600 mb-4">
              A full-stack web app to manage students, attendance, and records.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              React, Node.js, MySQL
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/USERNAME/student-management-system"
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Medicine Search App
            </h3>

            <p className="text-gray-600 mb-4">
              A mobile app to search medicines and view usage and precautions.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Flutter, API Integration
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/USERNAME/medicine-search-app"
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
