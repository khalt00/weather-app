import { useQuery } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp } from 'lib/http/useHttp';
import { GetTaskListRequest } from 'types/tasks';

export const useGetTaskListQuery = () => {
  const { http, handleError } = useHttp();
  const params: GetTaskListRequest = {
    all: true,
    logs: -1
  }

  return useQuery(
    [QueryKey.tasks, params],
    async () => {
      const res = await http.getAsync<GetTaskListRequest, any>('task_list', params);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};