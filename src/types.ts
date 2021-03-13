export interface BeeminderDatapoint {
  timestamp: number;
  value: number;
  comment: string;
  id: string;
  updated_at: number;
  requestid: string;
  canonical: string;
  fulltext: string;
  origin: string;
  daystamp: string;
}

export interface BeeminderGoal {
  slug: string;
  rate: number;
  last_datapoint?: BeeminderDatapoint;
  roadall: [number, number | null, number | null][];
  recent_data: BeeminderDatapoint[];
  dueby: Record<string, { delta: number; total: number }>;
  curval: number;
  safebuf: number;
  gunits: string;
  autodata: 'toggl' | null; // TODO not actually exhaustive
}
