import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import face1 from '../assets/images/heendy_face1.png';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
});

export const loginState = atom({
  key: 'loginState',
  default: {
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const loginInfo = atom({
  key: 'loginInfo',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const selectedKnowledgeIdState = atom({
  key: 'selectedKnowledgeIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// 선택된 아이템 type 저장
export const selectedTypeState = atom({
  key: 'selectedTypeState',
  default: 0,
});

// 선택된 옷 아이템 ID 저장
export const selectedItemsState = atom({
  key: 'selectedItemsState',
  default: [],
});

// 선택된 얼굴 아이템 ID 저장
export const selectedFaceState = atom({
  key: 'selectedFaceState',
  default: face1,
});

export const townInfo = atom({
  key: 'townInfo',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
