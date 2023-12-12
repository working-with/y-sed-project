import { Question } from "./Question";

export interface Script {
  data: data[];
}

interface data {
  id: string;
  code: string;
  question: Question[];
}
