// import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section id="contact" className="bg-gray-100 py-16 px-4">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-10">
//           Discover My World
//         </h2>

//         <div className="flex justify-center gap-6">
//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/923220819896" // replace with your WhatsApp link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-green-500 text-xl"
//           >
//             <FaWhatsapp />
//           </a>

//           {/* Instagram */}
//           <a
//             href="tiktok.com/@uzzy271" // replace with your Instagram link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-pink-500 text-xl"
//           >
//             <FaInstagram />
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com/mduzair71" // replace with your GitHub link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-800 text-xl"
//           >
//             <FaGithub />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-gray-100 via-white to-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-blue-600 to-purple-600
          bg-clip-text text-transparent animate-fadeIn"
        >
          Discover My World
        </h2>

        <p className="text-gray-600 mb-14 animate-fadeIn delay-200">
          Let’s connect and build something amazing together 🚀
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 flex-wrap">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/923220819896"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20
              flex items-center justify-center
              rounded-2xl
              bg-white/70 backdrop-blur-xl
              shadow-lg border border-gray-200
              text-green-500 text-2xl sm:text-3xl
              transition-all duration-500
              group-hover:-translate-y-2 group-hover:scale-110
              group-hover:shadow-2xl animate-float"
            >
              <FaWhatsapp />
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://tiktok.com/@uzzy271"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20
              flex items-center justify-center
              rounded-2xl
              bg-white/70 backdrop-blur-xl
              shadow-lg border border-gray-200
              text-pink-500 text-2xl sm:text-3xl
              transition-all duration-500
              group-hover:-translate-y-2 group-hover:rotate-6
              group-hover:scale-110 group-hover:shadow-2xl animate-float delay-200"
            >
              <FaInstagram />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mduzair71"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20
              flex items-center justify-center
              rounded-2xl
              bg-white/70 backdrop-blur-xl
              shadow-lg border border-gray-200
              text-gray-800 text-2xl sm:text-3xl
              transition-all duration-500
              group-hover:-translate-y-2 group-hover:-rotate-6
              group-hover:scale-110 group-hover:shadow-2xl animate-float delay-400"
            >
              <FaGithub />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
