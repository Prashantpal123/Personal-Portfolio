import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Docso Medicare LLP",
      role: "Frontend Developer",
      duration: "october 2024 – Present",
      points: [
        "Designed and implemented company website homepage with modern UI/UX principles. using React.js,TypeScript,Javascript,tailwind css and Material UI. Designed and implemented dynamic admin",
        "dashboards Integrated Razorpay payment gateway for secure and smooth online transactions.",
        "Built around 80% of the admin panel, including dashboards and management features.",
        "Implemented real-time notifications using SSE for appointments, medicine orders, and task updates.",
      ],
    },
    {
      company: "WebcraftUI (Freelance)",
      role: "frontend Developer",
      duration: "Oct 2024 – present",
      points: [
        "Designed and developed modern landing pages, portfolio websites, and dashboards for startups and personal brands.",
        "Collaborated with clients to transform design mockups (Figma, Adobe XD) into fully functional web interfaces.",
        "IOptimized website performance, SEO, and cross-browser compatibility.",
        "Delivered custom features and bug fixes for existing web applications."
      ],
    },
   
  ];

  return (
    <section id="experience" className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text ">
          Professional  <span className="text-amber-500">Experience </span>
        </h2>

        <div className="relative border-l-4 border-blue-500/20 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.35rem] top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md" />

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  {exp.company}
                </h3>
                <p className="flex items-center text-sm text-gray-500 gap-1">
                  <Calendar className="w-4 h-4" /> {exp.duration}
                </p>
              </div>

              <p className="text-blue-700 font-medium mb-4">{exp.role}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
