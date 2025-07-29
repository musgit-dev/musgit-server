import { Composer } from './composer.model';
import { Practice } from './practice.model';

export enum ProgressEvaluationEnum {
  UNKNOWN = 'Unknown',
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  EXCELLENT = 'Excellent',
}

export enum PieceComplexity {
  UNKNOWN = 'Unknown',
  EASY = 'Easy',
  NORMAL = 'Normal',
  COMPLEX = 'Complex',
}

export enum PieceState {
  UKNOWN = 'Unknown',
  LEARNING = 'Learning',
  NORMAL = 'Normal',
  READY = 'Ready',
}

export interface Piece {
  id: string;
  name: string;
  pages: number;
  composer: string;
  complexity: PieceComplexity;
  state: PieceState;
  practiced: boolean;
  currentPractice: string;
}
