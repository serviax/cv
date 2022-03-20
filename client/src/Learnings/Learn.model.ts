type LearningType = 'conference' | 'training' | 'home-project' | 'certification';

interface LearningModel {
  description: string;
  type: LearningType;
}

interface LearningModelOverview {
  year: number;
  updates: LearningModel[];
}

export default LearningModelOverview;