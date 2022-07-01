import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { LocalStorageKey, RecoilAtomKey } from 'constants/appConstants';
import { localStorageEffect } from 'lib/recoil/localStorageEffect';
import { UserInfoData } from 'types/users';

const tokenState = atom({
  key: RecoilAtomKey.token,
  default: '',
  effects: [localStorageEffect(LocalStorageKey.token)],
});

const userInfoState = atom({
  key: RecoilAtomKey.userInfo,
  default: {} as UserInfoData,
});

export const useUserState = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const resetTokenState = useResetRecoilState(tokenState);

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const resetUserInfoState = useResetRecoilState(userInfoState);

  const resetUserState = () => {
    resetTokenState();
    resetUserInfoState();
  };

  return {
    token,
    setToken,
    userInfo,
    setUserInfo,
    resetUserState,
  };
};
