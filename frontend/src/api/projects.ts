import axios from 'axios';

// src/api/projects.ts

export interface Project {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
}

const API_BASE_URL = '/api/projects';

export async function fetchProjects(): Promise<Project[]> {
    const response = await axios.get<Project[]>(API_BASE_URL);
    return response.data;
}

export async function fetchProjectById(id: string): Promise<Project> {
    const response = await axios.get<Project>(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createProject(project: Omit<Project, 'id'>): Promise<Project> {
    const response = await axios.post<Project>(API_BASE_URL, project);
    return response.data;
}

export async function updateProject(id: string, project: Partial<Project>): Promise<Project> {
    const response = await axios.put<Project>(`${API_BASE_URL}/${id}`, project);
    return response.data;
}

export async function deleteProject(id: string): Promise<void> {
    await axios.delete(`${API_BASE_URL}/${id}`);
}