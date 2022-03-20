import { ProjectResponse } from './ProjectResponse';

interface WorkExperienceResponse {
  startDate: string;
  endDate?: string;
  companyName: string;
  description: string;
  projects: ProjectResponse[];
}

export default WorkExperienceResponse;