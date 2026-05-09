import type { ComponentType } from 'react';

export type ProblemStatus = 'Ready' | 'In Progress' | 'Planned';

export interface PracticeProblem {
  id: string;
  title: string;
  status: ProblemStatus;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  summary: string;
  focusAreas: string[];
  component?: ComponentType;
}
