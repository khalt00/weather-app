import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { LocalStorageKey, RecoilAtomKey } from 'constants/appConstants';
import { localStorageEffect } from 'lib/recoil/localStorageEffect';
import { GroupType } from 'constants/groupTypes'

const groupTypeState = atom({
  key: RecoilAtomKey.groupType,
  default: GroupType.closeFormGroup
});

const groupDataState = atom({
  key: RecoilAtomKey.groupData,
  default: {} as any,
});

const groupUserState = atom({
  key: RecoilAtomKey.groupUser,
  default: '',
});

export const useGroupState = () => {
  const [groupType, setGroupType] = useRecoilState(groupTypeState);
  const resetGroupTypeState = useResetRecoilState(groupTypeState);

  const [groupData, setGroupData] = useRecoilState(groupDataState);
  const resetGroupDataState = useResetRecoilState(groupDataState);

  const [groupUser, setGroupUser] = useRecoilState(groupUserState);
  const resetGroupUserState = useResetRecoilState(groupUserState);

  const resetGroupState = () => {
    resetGroupTypeState();
    resetGroupDataState();
    resetGroupUserState();
  };

  return {
    groupType,
    setGroupType,
    groupData,
    setGroupData,
    groupUser,
    setGroupUser,
    resetGroupState,
  };
};
