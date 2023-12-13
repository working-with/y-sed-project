import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const quizAnswerAtom = atom({
  key: "quizAnswer",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
