import { Image } from "./Image";

export interface Experiment {
  data: data[];
}

interface data {
  id: string;
  code: string;
  gender: number;
  image: Image[];
  // answerType: string;
  // booleanAnswer?: BooleanAnswer;
  // scaleAnswer?: number;
}

enum BooleanAnswer {
  "O" = 0,
  "X" = 1,
}
