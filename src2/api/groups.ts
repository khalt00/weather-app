import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp, useHttpV0 } from 'lib/http/useHttp';
import { 
  CreateTopGroupRequest, UpdateGroupRequest,
  AddUserToGroupRequest, RemoveUserFromGroupRequest, GetUsersByGroupRequest 
} from 'types/groups'
import { useGroupState } from 'stores/groupState';

export const useGetGroupTreeQuery = () => {
  const { http, handleError } = useHttpV0();
  return useQuery(
    QueryKey.groupTree,
    async () => {
      const res = await http.getAsync<null, any>('grouptree');
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const useGetUserInGroupQuery = (groupId: string) => {
  const { http, handleError } = useHttpV0();

  return useQuery(
    [QueryKey.groupUser, groupId],
    async () => {
      const res = await http.getAsync<null, any>(`groups/${groupId}/users`);
      return res.data;
    },
    {
      enabled: !!groupId,
      onError: handleError,
    }
  );
}

/* MUTATION */
export const useCreateTopGroupMutation = () => {
  const { http, handleError } = useHttpV0();
  return useMutation(
    async (req: CreateTopGroupRequest) => {
      const requestUrl = `workspaces/${req.workspace_id}/groups`
      const res = await http.postAsync<any, any>(requestUrl, req.data);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const useUpdateGroupMutation = () => {
  const { http, handleError } = useHttpV0();
  return useMutation(
    async (req: UpdateGroupRequest) => {
      const requestUrl = `workspaces/${req.workspace_id}/groups/${req.group_id}`
      const res = await http.putAsync<any, any>(requestUrl, req.data);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const useDeleteGroupMutation = () => {
  const { http, handleError } = useHttpV0();
  return useMutation(
    async (groupId: string) => {
      const requestUrl = `groups/${groupId}`
      const res = await http.deleteAsync<any, any>(requestUrl);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const useGetUsersByGroupMutation = () => {
  const { http, handleError } = useHttp();
  const { setGroupUser } = useGroupState();

  return useMutation(
    async (req: GetUsersByGroupRequest) => {
      const res = await http.getAsync<GetUsersByGroupRequest, any>('get_users_by_group', req);
      return res.data;
    },
    {
      onSuccess: (data) => setGroupUser(Object.keys(data)[0]),
      onError: handleError,
    }
  );
}

export const useAddUserToGroupMutation = () => {
  const { http, handleError } = useHttpV0();

  return useMutation(
    async (req: AddUserToGroupRequest) => {
      const res = await http.postAsync<AddUserToGroupRequest, any>('users', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}

export const useRemoveUserFromGroupMutation = () => {
  const { http, handleError } = useHttpV0();

  return useMutation(
    async (req: RemoveUserFromGroupRequest) => {
      const res = await http.deleteAsync<RemoveUserFromGroupRequest, any>('users', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}