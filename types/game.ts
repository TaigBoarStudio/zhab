export interface Province {
  id: string;
  name: string;
  d: string;
}

export type GameState = 'idle' | 'playing' | 'finished';

export interface GameStats {
  score: number;
  total: number;
  time: number;
  accuracy: number;
}
