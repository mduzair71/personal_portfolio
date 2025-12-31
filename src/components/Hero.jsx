function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="text-center px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I’m Uzair 👋
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Web Developer & Mobile App Developer
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>

          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero
