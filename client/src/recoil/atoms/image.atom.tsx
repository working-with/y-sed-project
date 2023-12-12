import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const lastImageAtom = atom({
  key: "lastImage",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
