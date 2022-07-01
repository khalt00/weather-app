import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { LocalStorageKey, RecoilAtomKey } from 'constants/appConstants';
import { localStorageEffect } from 'lib/recoil/localStorageEffect';

const currentThemeState = atom({
  key: RecoilAtomKey.currentTheme,
  default: 'black',
  // effects: [localStorageEffect(LocalStorageKey.currentTheme)],
});

export const useThemeState = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(currentThemeState);
  const resetCurrentThemeState = useResetRecoilState(currentThemeState);

  return { currentTheme, setCurrentTheme, resetCurrentThemeState };
};
