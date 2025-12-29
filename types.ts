export interface StrategyItem {
  title: string;
  description: string;
  category: 'blue' | 'emerald' | 'purple';
  icon: string;
}

export interface FunnelStage {
  stage: string;
  title: string;
  description: string;
  metrics: string;
  type: 'top' | 'middle' | 'bottom';
}

export interface TerminalRow {
  id: string;
  timeframe: string;
  focus: string;
  output: string;
  details: string[];
  status: 'pending' | 'active' | 'complete';
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  type: 'text' | 'list' | 'quote';
  footer: string;
}

export interface Offer {
  name: string;
  idealFor: string;
  duration: string;
  type: 'retainer' | 'sprint' | 'delivery' | 'managed';
}

export interface TargetIndustry {
  name: string;
  rationale: string;
  icon: string;
}