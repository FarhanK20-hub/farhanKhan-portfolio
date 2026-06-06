// ══════════════════════════════════════
// Shared TypeScript Types
// ══════════════════════════════════════

export type ScreenState = 'gate' | 'select' | 'architect' | 'storyteller';

export interface Skill {
  icon: string;
  name: string;
  pct: number;
}

export type SkillsMap = Record<string, Skill[]>;

export interface ProjectMetric {
  v: string;
  k: string;
}

export interface Project {
  num: string;
  title: string;
  tagline: string;
  year: string;
  badge: string;
  badgeClass: 'badge-deployed' | 'badge-progress' | 'badge-concept';
  desc: string;
  metrics: ProjectMetric[];
  stack: string[];
  links: string[];
}

export interface TimelineItem {
  period: string;
  dot: 'current' | 'past' | 'todo';
  title: string;
  org: string;
  detail: string;
}

export interface WorkItem {
  cat: string;
  title: string;
  grad: string;
}
