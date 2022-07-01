import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { LocalStorageKey, RecoilAtomKey } from 'constants/appConstants';
import { localStorageEffect } from 'lib/recoil/localStorageEffect';

const currentApplicationIdState = atom({
  key: RecoilAtomKey.currentApplicationId,
  default: '',
  // effects: [localStorageEffect(LocalStorageKey.currentApplicationId)],
});

export const useApplicationState = () => {
  const [currentApplicationId, setCurrentApplicationId] = useRecoilState(currentApplicationIdState);
  const resetCurrentApplicationIdState = useResetRecoilState(currentApplicationIdState);

  const resetApplicationState = () => {
    resetCurrentApplicationIdState();
  };

  return { currentApplicationId, setCurrentApplicationId, resetApplicationState };
};
