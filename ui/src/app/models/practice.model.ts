export enum ProgressEvaluationEnum {
  UNKNOWN = 'Unknown',
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  EXCELLENT = 'Excellent',
}

export interface Practice {
  id: string;
  piece: string;
  composer: string;
  startDate: Date;
  endDate: Date;
  progressEvaluation: ProgressEvaluationEnum;
}
