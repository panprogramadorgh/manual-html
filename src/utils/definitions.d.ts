export interface Tab {
  label: string;
  content: React.ReactNode[];
  highlightedLines?: number[];
}
