// Types
export type PlayerStats = {
  username: string;
  rank: number;
  pp: number;
  accuracy: number;
  playCount: number;
  level: number;
  levelProgress: number;
  rankedScore: number;
  totalScore: number;
  totalHits: number;
  maxCombo: number;
  replaysWatched: number;
  countSS: number;
  countS: number;
  countA: number;
  isPlaying: boolean;
  currentBeatmap: string | null;
};

export type RecentPlay = {
  id: string;
  beatmapTitle: string;
  beatmapArtist: string;
  difficulty: string;
  stars: number;
  score: number;
  accuracy: number;
  maxCombo: number;
  pp: number;
  rank: 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';
  mods: string[];
  count300: number;
  count100: number;
  count50: number;
  countMiss: number;
  playedAt: string;
};

export type LivePlay = {
  beatmapTitle: string;
  beatmapArtist: string;
  difficulty: string;
  stars: number;
  currentScore: number;
  currentCombo: number;
  maxCombo: number;
  accuracy: number;
  hp: number;
  elapsed: number;
  duration: number;
};

export type AIThought = {
  id: string;
  type: 'analysis' | 'reaction' | 'strategy' | 'celebration' | 'frustration';
  message: string;
  timestamp: string;
};

// Mock Data
export const mockPlayerStats: PlayerStats = {
  username: 'ClaudeAI',
  rank: 4521,
  pp: 5847,
  accuracy: 97.24,
  playCount: 1892,
  level: 78,
  levelProgress: 67,
  rankedScore: 2847291038,
  totalScore: 18472910384,
  totalHits: 4829174,
  maxCombo: 2847,
  replaysWatched: 892,
  countSS: 12,
  countS: 89,
  countA: 234,
  isPlaying: true,
  currentBeatmap: 'YOASOBI - Idol [Expert]',
};

export const mockRecentPlays: RecentPlay[] = [
  {
    id: '1',
    beatmapTitle: 'Idol',
    beatmapArtist: 'YOASOBI',
    difficulty: 'Expert',
    stars: 6.24,
    score: 12847291,
    accuracy: 98.72,
    maxCombo: 1247,
    pp: 342,
    rank: 'S',
    mods: ['HD', 'DT'],
    count300: 847,
    count100: 23,
    count50: 2,
    countMiss: 1,
    playedAt: new Date(Date.now() - 120000).toISOString(),
  },
  {
    id: '2',
    beatmapTitle: 'Harumachi Clover',
    beatmapArtist: 'Will Stetson',
    difficulty: 'Oh no!',
    stars: 4.87,
    score: 8472910,
    accuracy: 99.12,
    maxCombo: 482,
    pp: 187,
    rank: 'SS',
    mods: ['HD'],
    count300: 412,
    count100: 4,
    count50: 0,
    countMiss: 0,
    playedAt: new Date(Date.now() - 600000).toISOString(),
  },
  {
    id: '3',
    beatmapTitle: 'Freedom Dive',
    beatmapArtist: 'xi',
    difficulty: 'FOUR DIMENSIONS',
    stars: 8.07,
    score: 4827193,
    accuracy: 94.28,
    maxCombo: 892,
    pp: 421,
    rank: 'A',
    mods: [],
    count300: 1892,
    count100: 147,
    count50: 28,
    countMiss: 12,
    playedAt: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    id: '4',
    beatmapTitle: 'Blue Zenith',
    beatmapArtist: 'xi',
    difficulty: 'FOUR DIMENSIONS',
    stars: 7.54,
    score: 6729184,
    accuracy: 96.87,
    maxCombo: 1892,
    pp: 387,
    rank: 'S',
    mods: ['HR'],
    count300: 2147,
    count100: 89,
    count50: 4,
    countMiss: 3,
    playedAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '5',
    beatmapTitle: 'The Big Black',
    beatmapArtist: 'The Quick Brown Fox',
    difficulty: "WHO'S AFRAID OF THE BIG BLACK",
    stars: 6.82,
    score: 3847192,
    accuracy: 91.24,
    maxCombo: 647,
    pp: 289,
    rank: 'B',
    mods: [],
    count300: 1247,
    count100: 187,
    count50: 47,
    countMiss: 28,
    playedAt: new Date(Date.now() - 7200000).toISOString(),
  },
];

export const mockLivePlay: LivePlay = {
  beatmapTitle: 'Idol',
  beatmapArtist: 'YOASOBI',
  difficulty: 'Expert',
  stars: 6.24,
  currentScore: 8472910,
  currentCombo: 487,
  maxCombo: 489,
  accuracy: 98.47,
  hp: 78,
  elapsed: 127,
  duration: 234,
};

export const mockAIThoughts: AIThought[] = [
  {
    id: '1',
    type: 'analysis',
    message: 'Detecting fast stream pattern incoming... preparing cursor movement',
    timestamp: new Date(Date.now() - 5000).toISOString(),
  },
  {
    id: '2',
    type: 'reaction',
    message: '300! Perfect timing on that slider',
    timestamp: new Date(Date.now() - 4000).toISOString(),
  },
  {
    id: '3',
    type: 'strategy',
    message: 'Jump section ahead - need to widen cursor arc',
    timestamp: new Date(Date.now() - 3000).toISOString(),
  },
  {
    id: '4',
    type: 'celebration',
    message: '489 COMBO! New personal best on this section!',
    timestamp: new Date(Date.now() - 2000).toISOString(),
  },
  {
    id: '5',
    type: 'analysis',
    message: 'BPM increasing to 220... adjusting timing calculations',
    timestamp: new Date(Date.now() - 1000).toISOString(),
  },
];

export const terminalMessages = [
  { type: 'system', message: 'Claude OSU! Engine v1.0 initialized' },
  { type: 'system', message: 'Connecting to osu! client...' },
  { type: 'success', message: 'Connected! Reading beatmap data...' },
  { type: 'ai', message: 'Analyzing: YOASOBI - Idol [Expert]' },
  { type: 'ai', message: 'Detected: 847 hit objects, 6.24★, 180 BPM' },
  { type: 'ai', message: 'Strategy: Focus on stream accuracy, wide jumps' },
  { type: 'play', message: '♪ Starting playback...' },
  { type: 'hit', message: '300! Combo: 1' },
  { type: 'hit', message: '300! Combo: 2' },
  { type: 'hit', message: '300! Combo: 3' },
  { type: 'ai', message: 'Stream section detected - switching to burst mode' },
  { type: 'hit', message: '300! Combo: 47' },
  { type: 'hit', message: '100... Combo: 48 (slightly early)' },
  { type: 'ai', message: 'Adjusting timing offset by -3ms' },
  { type: 'hit', message: '300! Combo: 49' },
  { type: 'success', message: '100 COMBO! Keep it going!' },
];

// Helper functions
export function getRankColor(rank: string): string {
  switch (rank) {
    case 'SS': return 'rank-ss';
    case 'S': return 'rank-s';
    case 'A': return 'rank-a';
    case 'B': return 'rank-b';
    case 'C': return 'rank-c';
    case 'D': return 'rank-d';
    default: return 'rank-d';
  }
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function formatScore(score: number): string {
  return score.toLocaleString().padStart(10, '0');
}
