export type UpdateKnowledgeType = 'conference' | 'training' | 'home-project' | 'certification';

interface UpdateKnowledgeResponse {
  year: number,
  description: string,
  type: UpdateKnowledgeType
}

export default UpdateKnowledgeResponse;