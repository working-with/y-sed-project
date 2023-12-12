import { Experiment } from "./Experiment";

export interface KidInformation {
  id: number;
  code: string;
  name: string;
  gender: Gender;
  experiment: Experiment[];
  answer: string[];
}

enum Gender {
  "F" = 0,
  "M" = 1,
}
