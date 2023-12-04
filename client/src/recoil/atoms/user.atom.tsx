import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
	key: 'userInfo',
	default: {
		name: '',
		code: '',
		gender: '',
	},
	effects_UNSTABLE: [persistAtom],
});
