import { useQuery } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp } from 'lib/http/useHttp';
import { GetProjectTemplatesResponse } from 'types/templates'

export const useGetProjectTemplatesQuery = () => {
  const { http, handleError } = useHttp();

  return useQuery(
    QueryKey.templates,
    async () => {
      const res = await http.getAsync<null, GetProjectTemplatesResponse>('get_pj_templates');
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};