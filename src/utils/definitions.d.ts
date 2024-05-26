export interface Tab {
  label: string;
  content: React.ReactNode[];
  highlightedLines?: number[];
}

export interface AsideOption {
  header?: boolean;
  label: string;
}
