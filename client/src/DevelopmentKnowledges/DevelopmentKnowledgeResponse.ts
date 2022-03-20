interface DevelopmentKnowledgeResponse {
  technology: string,
  usedInProject?: boolean,
  followedTraining?: boolean,
  usedInLastYear?: boolean,
  usedInPersonalProject?: boolean,
  level: number
}

export default DevelopmentKnowledgeResponse;