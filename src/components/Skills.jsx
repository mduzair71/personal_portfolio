
// import { useState } from "react";
// import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
// import { SiFlutter, SiFirebase, SiTailwindcss, SiSupabase, SiVite, SiHtml5, SiCss3, SiDart, SiExpress } from "react-icons/si";
// import { AiOutlineApi } from "react-icons/ai";

// export default function Skills() {
//   const [showAll, setShowAll] = useState(false);

//   const mainSkills = [
//     { name: "Flutter", icon: <SiFlutter /> },
//     { name: "React", icon: <FaReact /> },
//     { name: "Node.js", icon: <FaNodeJs /> },
//     // { name: "JavaScript", icon: "JS" },
//     { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//     { name: "Firebase", icon: <SiFirebase /> },
//   ];

//   const otherSkills = [
//     { name: "REST API", icon: <AiOutlineApi /> },
//     { name: "Git", icon: "G" },
//     { name: "GitHub", icon: <FaGithub /> },
//     { name: "MySQL", icon: <FaDatabase /> },
//     { name: "Supabase", icon: <SiSupabase /> },
//     { name: "Vite", icon: <SiVite /> },
//     { name: "HTML", icon: <SiHtml5 /> },
//     { name: "CSS", icon: <SiCss3 /> },
//     { name: "Dart", icon: <SiDart /> },
//     { name: "Express.js", icon: <SiExpress /> },
//     { name: "API Integration", icon: <AiOutlineApi /> },
//     { name: "Responsive Design", icon: "R" },
//   ];

//   return (
//     <section id="skills" className="bg-gray-50 py-16 px-4">
//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-10">
//           Skills & Expertise
//         </h2>

//         {/* Main Skills */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
//           {mainSkills.map((skill) => (
//             <span
//               key={skill.name}
//               className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2
//                          bg-blue-600 text-white
//                          rounded-full text-xs sm:text-sm
//                          font-medium
//                          transition-all duration-300
//                          hover:bg-blue-700 hover:scale-105"
//             >
//               <span className="text-base sm:text-lg">{skill.icon}</span>
//               {skill.name}
//             </span>
//           ))}
//         </div>

//         {/* Other Skills */}
//         <div
//           className={`flex flex-wrap justify-center gap-3 sm:gap-4
//                       transition-all duration-500`}
//         >
//           {(showAll ? otherSkills : otherSkills.slice(0, 0)).map((skill) => (
//             <span
//               key={skill.name}
//               className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5
//                          border border-gray-300
//                          rounded-full text-xs sm:text-sm
//                          text-gray-700 bg-white
//                          transition-all duration-300
//                          hover:border-blue-500 hover:text-blue-600
//                          hover:scale-105"
//             >
//               <span className="text-base">{skill.icon}</span>
//               {skill.name}
//             </span>
//           ))}
//         </div>

//         {/* Show More / Less */}
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="mt-8 text-sm sm:text-base
//                      text-gray-700 font-medium underline
//                      transition-colors duration-300
//                      hover:text-blue-600"
//         >
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTailwindcss, SiSupabase, SiVite, SiHtml5, SiCss3, SiDart, SiExpress } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const mainSkills = [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const otherSkills = [
    { name: "REST API", icon: <AiOutlineApi /> },
    { name: "Git", icon: "G" },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "API Integration", icon: <AiOutlineApi /> },
    { name: "Responsive Design", icon: "R" },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16
        bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-fadeIn">
          Skills & Expertise
        </h2>

        {/* Main Skills */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {mainSkills.map((skill, i) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3
              rounded-full text-white font-semibold text-sm sm:text-base
              bg-gradient-to-r from-blue-600 to-purple-600
              shadow-lg transform transition-all duration-500
              hover:scale-110 hover:shadow-2xl hover:brightness-110
              animate-slideUp"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="text-base sm:text-lg">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>

        {/* Other Skills */}
        <div className="flex flex-wrap justify-center gap-4 transition-all duration-500">
          {(showAll ? otherSkills : []).map((skill, i) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3
              rounded-full text-gray-700 bg-white border border-gray-300
              transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-blue-500 hover:text-blue-600
              animate-slideUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>

        {/* Show More / Less */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 text-lg text-gray-700 font-medium underline
          hover:text-blue-600 transition-all duration-300 animate-fadeIn"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
