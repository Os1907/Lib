// AtomSlice/Info.js
import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState', // يجب أن يكون key فريدًا
  default: 0,
});