import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { LocalStorageKey, RecoilAtomKey } from 'constants/appConstants';
import { localStorageEffect } from 'lib/recoil/localStorageEffect';

const currentWorkspaceIdState = atom({
  key: RecoilAtomKey.currentWorkspaceId,
  default: '',
  effects: [localStorageEffect(LocalStorageKey.currentWorkspaceId)],
});

export const useWorkspaceState = () => {
  const [currentWorkspaceId, setCurrentWorkspaceId] = useRecoilState(currentWorkspaceIdState);
  const resetCurrentWorkspaceIdState = useResetRecoilState(currentWorkspaceIdState);

  const resetWorkspaceState = () => {
    resetCurrentWorkspaceIdState();
  };

  return { currentWorkspaceId, setCurrentWorkspaceId, resetWorkspaceState };
};
