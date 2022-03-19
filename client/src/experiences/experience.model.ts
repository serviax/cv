import ProjectModel from './Project.model';

interface ExperienceModel {
  companyName: string,
  description?: string,
  startDate: string,
  endDate?: string,
  projects?: ProjectModel[],
  isLongAgo: boolean
}

export default ExperienceModel;