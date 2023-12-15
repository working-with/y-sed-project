import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: "userInfo",
  default: {
    kidId: "",
    code: "",
    gender: "",
    firstName: "",
    lastName: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const userSelector = selector({
  key: "userInfoEdit",
  get: ({ get }) => {
    const userInfo = get(userInfoAtom);
    const { firstName, lastName, code, gender } = userInfo;

    return { name: `${firstName}${lastName}`, code, gender };
  },
});
