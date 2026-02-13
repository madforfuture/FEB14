export interface Tribute {
  id: string;
  name: string;
  message: string;
  location?: string;
  date: string;
  isOfficial?: boolean;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon?: 'alert' | 'info' | 'flag' | 'shield';
}

export interface Organization {
  name: string;
  description: string;
  url: string;
  logoColor: string;
}