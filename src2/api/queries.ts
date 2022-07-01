import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp } from 'lib/http/useHttp';
import { ProjectIdRequest } from 'types/projects'
import { QueryIdRequest, GetUserQueriesResponse, GetQueryConditionsResponse } from 'types/queries'

export const useGetUserQueriesQuery = (projectId: string) => {
  const { http, handleError } = useHttp();
  const params: ProjectIdRequest = {
    p_id: projectId
  }
  return useQuery(
    [QueryKey.userQueries, params],
    async () => {
      const res = await http.getAsync<ProjectIdRequest, Array<GetUserQueriesResponse>>('get_user_queries', params);
      return res.data;
    },
    {
      enabled: !!projectId,
      onError: handleError,
    }
  );
}

export const useGetQueryConditionsQuery = (queryId: string) => {
  const { http, handleError } = useHttp();
  const params: QueryIdRequest = {
    q_id: queryId
  }
  return useQuery(
    [QueryKey.queryConditions, params],
    async () => {
      const res = await http.getAsync<
       QueryIdRequest, GetQueryConditionsResponse
      >('get_query_conditions', params);
      return res.data;
    },
    {
      enabled: !!queryId,
      onError: handleError,
    }
  );
}

/* MUTATION */
export const useSaveNewQueryMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: any) => {
      const res = await http.postAsync<any, any>('save_query', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const usePostUpdateQueryMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: any) => {
      const res = await http.postAsync<any, any>('post_update_query', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const usePostDeleteQueryMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: QueryIdRequest) => {
      const res = await http.postAsync<QueryIdRequest, any>('post_delete_query', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};