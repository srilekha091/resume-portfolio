import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, I’m <span className="text-blue-600">Srilekha</span> 👋
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Full Stack Developer | React + TypeScript + Python
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg  hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Quick Bio */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-2xl"
      >
        <p className="text-gray-700 text-lg">
          I’m a passionate Full Stack Developer with 4+ years of experience
          building scalable web apps. I specialize in modern frontend
          frameworks and robust backend systems. Recently, I’ve been exploring
          AI-powered solutions to enhance user experiences.
        </p>
        <Link
          to="/about"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Learn more →
        </Link>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project Card Example */}
          {["Project One", "Project Two", "Project Three"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-2">
                Short description or AI-generated summary goes here.
              </p>
              <Link
                to="/projects"
                className="text-blue-600 hover:underline text-sm"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          View all projects →
        </Link>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech I Use</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <span>⚛️ React</span>
          <span>📘 TypeScript</span>
          <span>🎨 Tailwind CSS</span>
          <span>🐍 Python</span>
          <span>⚡ FastAPI</span>
          <span>🗄️ PostgreSQL</span>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Let’s build something together!
        </h2>
        <Link
          to="/contact"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
}
