export interface Survey {
  survey: Answer[];
}

interface Answer {
  booleanAnswer: number;
  scaleAnswer: number | null;
}
