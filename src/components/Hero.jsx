// import uzair from "../assets/uzair.jpg"

// function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
//       <div className="flex flex-col md:flex-row items-center gap-10 px-6">

//         {/* Image */}
//         <img
//           src={uzair}
//           alt="Uzair"
//           className="w-50 h-48 rounded-full border-4 border-blue-600 object-cover"
//         />

//         {/* Text */}
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Hi, I’m Uzair 👋
//           </h1>

//           <p className="text-lg text-gray-600 mb-6">
//             Web Developer & Mobile App Developer
//           </p>

//           <div className="flex gap-4 justify-center md:justify-start">
//             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               View Projects
//             </button>

//             <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
//               Contact Me
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Hero
import uzair from "../assets/uzair.jpg"

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="flex flex-col md:flex-row items-center gap-10 px-6">

        {/* Image */}
        <img
          src={uzair}
          alt="Uzair"
          className="
            w-32 h-32
            sm:w-40 sm:h-40
            md:w-50 md:h-50
            rounded-full
            border-4 border-blue-600
            object-cover
            shadow-lg
            ring-4 ring-blue-200
            hover:scale-105
            transition
            duration-300
          "
        />

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I’m Uzair 👋
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Web Developer & Mobile App Developer
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
        <a
  href="#projects"
  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  View Projects
</a>

    <a href="#contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Contact Me</a>
            
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
