import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp, useHttpV0 } from 'lib/http/useHttp';
import { DatabaseIdRequest } from 'types/databases'
import { 
  GetActionAndFieldSettingsRequest, GetActionAndFieldSettingsResponse,
  GetSfNewActionSettingsResponse
} from 'types/actions'

export const useGetActionAndFieldSettingsQuery = (datastoreId: string, actionId: string) => {
  const { http, handleError } = useHttp();
  const params: GetActionAndFieldSettingsRequest = {
    datastore_id: datastoreId,
    action_id: actionId
  }
  return useQuery(
    [QueryKey.actionAndFieldSettings, params],
    async () => {
      const res = await http.getAsync<
        GetActionAndFieldSettingsRequest, GetActionAndFieldSettingsResponse
      >('get_action_and_field_settings', params);
      return res.data;
    },
    {
      enabled: !!datastoreId && !!actionId,
      onError: handleError,
    }
  );
}

export const useGetSfNewActionSettingsQuery = (datastoreId: string) => {
  const { http, handleError } = useHttp();
  const params: DatabaseIdRequest = {
    datastore_id: datastoreId,
  }
  return useQuery(
    [QueryKey.sfNewActionSettings, params],
    async () => {
      const res = await http.getAsync<DatabaseIdRequest, Array<GetSfNewActionSettingsResponse>>(
        'get_sf_new_action_settings', params
      );
      return res.data;
    },
    {
      enabled: !!datastoreId,
      onError: handleError,
    }
  );
}