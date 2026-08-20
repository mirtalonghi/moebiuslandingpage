import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Faiwel Wolfsdorf",
    description: "Sitio web para un artista surrealista: un viaje cromático desde Varsovia hasta Sudamérica, con galería de obra multiidioma y experiencia inmersiva.",
    image: "/projects/faiwelwolfsdorf.png",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    link: "https://faiwelwolfsdorf.com",
    github: "https://github.com/mirtalonghi/wolfsdorff"
  },
  {
    title: "E-commerce Platform",
    description: "Una plataforma completa con React, Node.js y Stripe.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Chat Assistant",
    description: "Asistente inteligente utilizando OpenAI API y Next.js.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Fitness Tracker App",
    description: "Aplicación móvil para seguimiento de entrenamientos.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase"],
    link: "#",
    github: "#"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mi Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes y destacados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver el sitio de ${project.title}`}
                      className="p-2 bg-white rounded-full text-slate-950 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver el código de ${project.title} en GitHub`}
                      className="p-2 bg-white rounded-full text-slate-950 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
