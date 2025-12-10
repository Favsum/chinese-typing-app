
export const GameStatus = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  FINISHED: 'FINISHED'
} as const;

export type GameStatus = typeof GameStatus[keyof typeof GameStatus];

export interface TypingStats {
  wpm: number;
  accuracy: number;
  timeElapsed: number;
  totalChars: number;
  correctChars: number;
  errors: number;
}

export interface CourseItem {
  hanzi: string;
  pinyin: string;
}

export interface Course {
  id: string;
  name: string;
  items: CourseItem[]; // Parsed content
  rawContent: string;  // Original text for reference
}
