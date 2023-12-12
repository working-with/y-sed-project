import { Image } from "./Image";

export interface Experiment {
  data: data[];
}

interface data {
  id: string;
  code: string;
  gender: number;
  image: Image[];
}
