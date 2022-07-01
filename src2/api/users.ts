import { useMutation, useQuery } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useUserAuth } from 'lib/auth/useUserAuth';
import { useHttp } from 'lib/http/useHttp';
import { useUserState } from 'stores/userState';
import { CurrentUserResponse, TokenAuthRequest, TokenAuthResponse, 
          ChangeUserInfoRequest, ChangePasswordRequest, UserInfoData } from 'types/users';
import { useGetUsersByGroupMutation } from 'api/groups'

export const useTokenAuthMutation = () => {
  const { http } = useHttp();
  const { signedIn } = useUserAuth();
  return useMutation(
    async (req: TokenAuthRequest) => {
      const res = await http.postAsync<TokenAuthRequest, TokenAuthResponse>('token-auth', req);
      return res.data;
    },
    {
      onSuccess: (data) => signedIn(data.token)
    }
  );
};

export const useSignOutUserMutation = () => {
  const { http, handleError } = useHttp();
  const { signedOut } = useUserAuth();
  return useMutation(() => http.postAsync<null, null>('logout_user', null), {
    onSuccess: signedOut,
    onError: handleError,
  });
};

export const useGetCurrentUserQuery = () => {
  const { http, handleError } = useHttp();
  const { setUserInfo } = useUserState();
  const getUsersByGroupMutation = useGetUsersByGroupMutation()
  return useQuery(
    QueryKey.currentUser,
    async () => {
      const res = await http.getAsync<null, CurrentUserResponse>('current_user');
      return res.data;
    },
    {
      onSuccess: (data) => {
        setUserInfo(data.user)
        getUsersByGroupMutation.mutate({
          admin_only: true, 
          workspace_id: data.user.currentWorkspaceId})
      },
      onError: handleError,
    }
  );
};

export const useChangeUserInfoMutation = () => {
  const { http, handleError } = useHttp();
  const { setUserInfo } = useUserState();
  return useMutation(
    async (req: ChangeUserInfoRequest) => {
      const res = await http.postAsync<ChangeUserInfoRequest, any>('post_update_user_profile', req);
      return res.data;
    }, {
      onSuccess: (data, variables: ChangeUserInfoRequest) => {
        // if return with no error, update recoil 's userInfoState 
        if (data && data.error === null) {
          setUserInfo((currVal: UserInfoData) => {
            return {
              ...currVal,
              uId: variables.user_id,
              email: variables.email,
              username: variables.username
            } as UserInfoData
          })
        }
      },
      onError: handleError,
    }
  );
}

export const useChangePasswordMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: ChangePasswordRequest) => {
      const res = await http.postAsync<ChangePasswordRequest, any>('post_update_password', req);
      return res.data;
    }, {
      onError: handleError,
    }
  );
}