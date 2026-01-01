// // import { useState } from "react";
// // import { FaReact, FaNodeJs } from "react-icons/fa";
// // import { SiFlutter, SiFirebase, SiTailwindcss } from "react-icons/si";


// // export default function Skills() {
// //   const [showAll, setShowAll] = useState(false);

// //   // const mainSkills = [
// //   //   "Flutter",
// //   //   "React",
// //   //   "Node.js",
// //   //   "JavaScript",
// //   //   "Tailwind CSS",
// //   //   "Firebase",
// //   // ];
// // const mainSkills = [
// //   { name: "Flutter", icon: <SiFlutter /> },
// //   { name: "React", icon: <FaReact /> },
// //   { name: "Node.js", icon: <FaNodeJs /> },
// //   { name: "JavaScript", icon: "JS" },
// //   { name: "Tailwind CSS", icon: <SiTailwindcss /> },
// //   { name: "Firebase", icon: <SiFirebase /> },
// // ];

// //   const otherSkills = [
// //     "REST API",
// //     "Git",
// //     "GitHub",
// //     "MySQL",
// //     "Supabase",
// //     "Vite",
// //     "HTML",
// //     "CSS",
// //     "Dart",
// //     "Express.js",
// //     "API Integration",
// //     "Responsive Design",
// //   ];

// //   return (
// //     <section id="skills" className="bg-gray-50 py-16 px-4">
// //       <div className="max-w-3xl mx-auto text-center">
// //         <h2 className="text-2xl sm:text-3xl font-bold mb-10">
// //           Skills & Expertise
// //         </h2>

// //         {/* Main Skills */}
// //         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
// //           {mainSkills.map((skill) => (
// //             <span
// //               key={skill.name}
// //               className="px-5 py-2 sm:px-6 sm:py-2.5
// //                          bg-blue-600 text-white
// //                          rounded-full text-xs sm:text-sm
// //                          font-medium
// //                          transition-all duration-300
// //                          hover:bg-blue-700 hover:scale-105"
// //             >
// //               <span className="text-lg">{skill.icon}</span>
// //       {skill.name}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Other Skills */}
// //         <div
// //           className={`flex flex-wrap justify-center gap-3 sm:gap-4
// //                       transition-all duration-500`}
// //         >
// //           {(showAll ? otherSkills : otherSkills.slice(0, 0)).map((skill) => (
// //             <span
// //               key={skill}
// //               className="px-5 py-2 sm:px-6 sm:py-2.5
// //                          border border-gray-300
// //                          rounded-full text-xs sm:text-sm
// //                          text-gray-700 bg-white
// //                          transition-all duration-300
// //                          hover:border-blue-500 hover:text-blue-600
// //                          hover:scale-105"
// //             >
// //               {skill}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Show More / Less */}
// //         <button
// //           onClick={() => setShowAll(!showAll)}
// //           className="mt-8 text-sm sm:text-base
// //                      text-gray-700 font-medium underline
// //                      transition-colors duration-300
// //                      hover:text-blue-600"
// //         >
// //           {showAll ? "Show Less" : "Show More"}
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }
// import { useState } from "react";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiFlutter, SiFirebase, SiTailwindcss } from "react-icons/si";

// export default function Skills() {
//   const [showAll, setShowAll] = useState(false);

//   const mainSkills = [
//     { name: "Flutter", icon: <SiFlutter /> },
//     { name: "React", icon: <FaReact /> },
//     { name: "Node.js", icon: <FaNodeJs /> },
//     { name: "JavaScript", icon: "JS" },
//     { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//     { name: "Firebase", icon: <SiFirebase /> },
//   ];

//   const otherSkills = [
//     "REST API",
//     "Git",
//     "GitHub",
//     "MySQL",
//     "Supabase",
//     "Vite",
//     "HTML",
//     "CSS",
//     "Dart",
//     "Express.js",
//     "API Integration",
//     "Responsive Design",
//   ];

//   return (
//     <section id="skills" className="bg-gray-50 py-16 px-4">
//       <div className="max-w-3xl mx-auto text-center">
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
//               key={skill}
//               className="px-5 py-2 sm:px-6 sm:py-2.5
//                          border border-gray-300
//                          rounded-full text-xs sm:text-sm
//                          text-gray-700 bg-white
//                          transition-all duration-300
//                          hover:border-blue-500 hover:text-blue-600
//                          hover:scale-105"
//             >
//               {skill}
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
import { useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTailwindcss, SiSupabase, SiVite, SiHtml5, SiCss3, SiDart, SiExpress } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const mainSkills = [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    // { name: "JavaScript", icon: "JS" },
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
    <section id="skills" className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Skills & Expertise
        </h2>

        {/* Main Skills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
          {mainSkills.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2
                         bg-blue-600 text-white
                         rounded-full text-xs sm:text-sm
                         font-medium
                         transition-all duration-300
                         hover:bg-blue-700 hover:scale-105"
            >
              <span className="text-base sm:text-lg">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>

        {/* Other Skills */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4
                      transition-all duration-500`}
        >
          {(showAll ? otherSkills : otherSkills.slice(0, 0)).map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5
                         border border-gray-300
                         rounded-full text-xs sm:text-sm
                         text-gray-700 bg-white
                         transition-all duration-300
                         hover:border-blue-500 hover:text-blue-600
                         hover:scale-105"
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>

        {/* Show More / Less */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 text-sm sm:text-base
                     text-gray-700 font-medium underline
                     transition-colors duration-300
                     hover:text-blue-600"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
