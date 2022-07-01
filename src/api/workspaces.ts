import { useMutation, useQuery, useQueryClient } from "react-query";

import { QueryKey } from "constants/appConstants";
import { useHttp, useHttpV0 } from "lib/http/useHttp";
import { useWorkspaceState } from "stores/workspaceState";
import {
  GetAllWorkspacesResponse,
  GetPasswordPolicyResponse,
  PostSetCurrentWorkspaceRequest,
  PostAddWorkspaceRequest,
} from "types/workspaces";

export const useGetAllWorkspacesQuery = () => {
  const { http, handleError } = useHttp();
  const { setCurrentWorkspaceId } = useWorkspaceState();
  return useQuery(
    QueryKey.workspaces,
    async () => {
      const res = await http.getAsync<null, GetAllWorkspacesResponse>(
        "get_all_workspaces"
      );
      return res.data;
    },
    {
      onSuccess: (data) => {
        // console.log(data);
        setCurrentWorkspaceId(data.currentWorkspaceId);
      },
      onError: handleError,
    }
  );
};

export const useGetPasswordPolicyQuery = (workspaceId: string) => {
  const { http, handleError } = useHttpV0();

  return useQuery(
    [QueryKey.passwordPolicy, workspaceId],
    async () => {
      const requestUrl = `workspaces/${workspaceId}/password-policy`;
      const res = await http.getAsync<null, GetPasswordPolicyResponse>(
        requestUrl
      );
      return res.data;
    },
    {
      enabled: !!workspaceId,
      onError: handleError,
    }
  );
};

/* MUTATION */
export const useSetCurrentWorkspaceMutation = () => {
  const { http, handleError } = useHttp();
  const queryClient = useQueryClient();
  const { currentWorkspaceId: oldWorkspaceId, setCurrentWorkspaceId } =
    useWorkspaceState();
  return useMutation(
    (workspaceId: string) =>
      http.postAsync<PostSetCurrentWorkspaceRequest, null>(
        "post_set_current_workspace",
        {
          workspace_id: workspaceId,
          old_workspace_id: oldWorkspaceId,
        }
      ),
    {
      onSuccess: (_, workspaceId) => {
        setCurrentWorkspaceId(workspaceId);
        queryClient.invalidateQueries(QueryKey.applications, { exact: true });
        queryClient.invalidateQueries(QueryKey.currentUser, { exact: true });
      },
      onError: handleError,
    }
  );
};

export const useAddWorkspaceMutation = () => {
  const { http, handleError } = useHttpV0();

  return useMutation(
    (data: PostAddWorkspaceRequest) =>
      http.postAsync<PostAddWorkspaceRequest, null>("workspaces", data),
    {
      onError: handleError,
    }
  );
};
