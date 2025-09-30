import { useEffect, useState } from "react";
import { fetchProjects, fetchAISummary, Project } from "../api/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [summaries, setSummaries] = useState<Record<number, string>>({});

  useEffect(() => {
    fetchProjects().then(async (data) => {
      setProjects(data);

      // Fetch AI summaries in parallel
      const summaryMap: Record<number, string> = {};
      await Promise.all(
        data.map(async (proj) => {
          try {
            const aiSummary = await fetchAISummary(proj.description);
            summaryMap[proj.id] = aiSummary;
          } catch {
            summaryMap[proj.id] = "⚠️ AI summary unavailable.";
          }
        })
      );
      setSummaries(summaryMap);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.05 }}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-2">{project.description}</p>
          {summaries[project.id] ? (
            <p className="italic text-gray-600 mb-2">
              💡 AI Summary: {summaries[project.id]}
            </p>
          ) : (
            <p className="text-sm text-gray-400 mb-2">⏳ Loading AI summary...</p>
          )}
          <p className="mt-2 font-semibold">
            Tech: {project.tech_stack.join(", ")}
          </p>
          <div className="mt-2 flex gap-2">
            <a
              href={project.github_link}
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={project.demo_link}
              className="text-green-500"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
