import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Discover My World
        </h2>

        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923220819896" // replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-green-500 text-xl"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="tiktok.com/@uzzy271" // replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-pink-500 text-xl"
          >
            <FaInstagram />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mduzair71" // replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-800 text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
