export type StoryStatus = "live" | "comingSoon";

export type StorySceneKind =
  | "home"
  | "choice"
  | "drift"
  | "loss"
  | "reclaim"
  | "placeholder";

export interface ResearchReference {
  id: string;
  label: string;
  source: string;
  summary: string;
  methodology: string;
  year: string;
  url: string;
  displayValue?: string;
  recommendedForUi: boolean;
}

export interface ReclaimMetric {
  label: string;
  value: number;
  unit: string;
}

export interface ReclaimOption {
  minutes: 15 | 30 | 45;
  line: string;
  metrics: ReclaimMetric[];
}

export interface StoryScene {
  id: string;
  kicker: string;
  title: string;
  line?: string;
  kind: StorySceneKind;
  actionLabel?: string;
  actionHint?: string;
  reclaimOptions?: ReclaimOption[];
  researchIds?: string[];
}

export interface StoryDefinition {
  id: string;
  title: string;
  summary: string;
  theme: string;
  status: StoryStatus;
  scenes: StoryScene[];
}

export function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${String(value)}`);
}
