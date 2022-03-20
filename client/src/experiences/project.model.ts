interface ProjectModel {
  title: string;
  role?: string;
  description?: string;
  keywords?: string[];
  tasks?: string[];
  order: number;
  startDate: string;
  endDate?: string;
}
export default ProjectModel;