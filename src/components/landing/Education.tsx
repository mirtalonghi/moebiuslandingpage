import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Grado en Ingeniería Informática",
    school: "Universidad Tecnológica",
    period: "2018 - 2022",
    description: "Especialización en desarrollo de software y sistemas distribuidos."
  },
  {
    degree: "Master en Desarrollo Web Full Stack",
    school: "Digital Academy",
    period: "2022 - 2023",
    description: "Enfoque intensivo en tecnologías modernas como React, Node.js y Cloud Computing."
  },
  {
    degree: "Certificación AWS Solutions Architect",
    school: "Amazon Web Services",
    period: "2023",
    description: "Diseño de arquitecturas escalables y seguras en la nube."
  }
];

const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Estudios & Educación</h2>
          <p className="text-slate-400">Mi trayectoria académica y certificaciones profesionales.</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-950 border-2 border-blue-500 rounded-full" />
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="text-blue-400" size={20} />
                    {item.degree}
                  </h3>
                  <span className="flex items-center gap-1 text-sm font-medium text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                </div>
                <p className="text-blue-400 font-medium mb-2">{item.school}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
