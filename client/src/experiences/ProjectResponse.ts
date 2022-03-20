export interface ProjectResponse {
  title: string;
  order: number,
  description?: string;
  role?: string
  tasks?: string[];
  keywords?: string[];
  startDate?: string,
  endDate?: string
}