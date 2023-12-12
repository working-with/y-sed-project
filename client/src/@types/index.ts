import { KidInformation } from "./KidInformation";
import { Experiment } from "./Experiment";
import { Script } from "./Script";
import { Image } from "./Image";

interface ResData<D> {
  status: number;
  error: string | null;
  data: D;
}

export type { ResData, KidInformation, Experiment, Script, Image };
