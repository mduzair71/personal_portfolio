
// import uzair from "../assets/uzair.jpg"

// function Hero() {
//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
//       <div className="flex flex-col md:flex-row items-center gap-10 px-6">

//         {/* Image */}
//         <img
//           src={uzair}
//           alt="Uzair"
//           className="
//             w-32 h-32
//             sm:w-40 sm:h-40
//             md:w-50 md:h-50
//             rounded-full
//             border-4 border-blue-600
//             object-cover
//             shadow-lg
//             ring-4 ring-blue-200
//             hover:scale-105
//             transition
//             duration-300
//           "
//         />

//         {/* Text */}
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Hi, I’m Uzair 👋
//           </h1>

//           <p className="text-lg text-gray-600 mb-6">
//             Web Developer & Mobile App Developer
//           </p>

//           <div className="flex gap-4 justify-center md:justify-start flex-wrap">
//         <a
//   href="#projects"
//   className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
// >
//   View Projects
// </a>

//     <a href="#contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Contact Me</a>
            
            
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Hero
import uzair from "../assets/uzair.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100 pt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 px-6">

        {/* Image */}
        <div className="relative group">
          <img
            src={uzair}
            alt="Uzair"
            className="
              w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52
              rounded-full border-4 border-blue-600
              object-cover shadow-2xl ring-4 ring-blue-200
              transition-transform duration-500
              group-hover:scale-105 animate-float
            "
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4
          bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-fadeIn">
            Hi, I’m Uzair 👋
          </h1>

          <p className="text-lg text-gray-600 mb-6 animate-fadeIn delay-200">
            Web Developer & Mobile App Developer
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap animate-fadeIn delay-400">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
              hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg 
              hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
