import { Experiment } from "./Experiment";

export interface KidInformation {
  kidId: number;
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
