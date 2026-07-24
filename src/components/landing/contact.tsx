import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Github, Send } from 'lucide-react';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    url: "#",
    color: "hover:bg-blue-600"
  },
  {
    name: "GitHub",
    icon: <Github size={24} />,
    url: "#",
    color: "hover:bg-slate-700"
  },
  {
    name: "Twitter",
    icon: <Twitter size={24} />,
    url: "#",
    color: "hover:bg-sky-500"
  },
  {
    name: "Email",
    icon: <Mail size={24} />,
    url: "mailto:tu@email.com",
    color: "hover:bg-red-500"
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-slate-400">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 bg-slate-800 text-white rounded-2xl border border-slate-700 transition-all duration-300 ${link.color} group`}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl"
        >
          <div className="bg-slate-950 p-8 md:p-12 rounded-[calc(1.5rem-1px)]">
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje directo</h3>
            <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Tu Email"
                className="bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                placeholder="Tu Mensaje"
                rows={4}
                className="bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-950 font-bold py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-95">
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
