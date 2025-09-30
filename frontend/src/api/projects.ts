import axios from "axios";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  github_link: string;
  demo_link: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get("http://localhost:8000/projects");
  return response.data;
};

export const fetchAISummary = async (desc: string): Promise<string> => {
  const res = await axios.get("http://localhost:8000/ai-summary", {
    params: { project_desc: desc },
  });
  return res.data.summary;
};
