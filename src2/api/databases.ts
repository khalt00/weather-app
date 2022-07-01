import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp, useHttpV0 } from 'lib/http/useHttp';
import { ProjectIdRequest } from 'types/projects'
import { 
  DatabaseIdRequest, GetDatabaseSettingResponse,
  GetDatabasesResponse, CreateDatabaseTemplateRequest,
  GetDatabaseStatusAndOrderResponse, GetDatabaseFieldsLayoutResponse
} from 'types/databases'

export const useGetDashbasesQuery = (projectId: string) => {
  const { http, handleError } = useHttpV0();
  const params: ProjectIdRequest = {
    p_id: projectId
  }
  return useQuery(
    [QueryKey.databases, params],
    async () => {
      const requestUrl = `applications/${projectId}/datastores`;
      const res = await http.getAsync<ProjectIdRequest, Array<GetDatabasesResponse>>(
        requestUrl
      );
      return res.data;
    },
    {
      enabled: !!projectId,
      onError: handleError,
    }
  );
}

export const useGetDatabaseSettingQuery = (datastoreId: string) => {
  const { http, handleError } = useHttp();
  const params: DatabaseIdRequest = {
    datastore_id: datastoreId
  }
  return useQuery(
    [QueryKey.databaseSetting, params],
    async () => {
      const res = await http.getAsync<DatabaseIdRequest, GetDatabaseSettingResponse>(
        'get_datastore_settings', params
      );
      return res.data;
    },
    {
      enabled: !!datastoreId,
      onError: handleError,
    }
  );
}

export const useGetDatabaseStatusAndOrderQuery = (datastoreId: string) => {
  const { http, handleError } = useHttp();
  const params: DatabaseIdRequest = {
    datastore_id: datastoreId
  }
  return useQuery(
    [QueryKey.databaseStatusAndOrder, params],
    async () => {
      const res = await http.getAsync<DatabaseIdRequest, GetDatabaseStatusAndOrderResponse>(
        'get_status_and_order', params
      );
      return res.data;
    },
    {
      enabled: !!datastoreId,
      onError: handleError,
    }
  );
}

export const useGetDatabaseFieldsLayoutQuery = (datastoreId: string) => {
  const { http, handleError } = useHttp();
  const params: DatabaseIdRequest = {
    datastore_id: datastoreId
  }
  return useQuery(
    [QueryKey.databaseFieldsLayout, params],
    async () => {
      const res = await http.getAsync<DatabaseIdRequest, GetDatabaseFieldsLayoutResponse>(
        'get_datastore_fields_layout', params
      );
      return res.data;
    },
    {
      enabled: !!datastoreId,
      onError: handleError,
    }
  );
}

/* MUTATION */
export const useCreateDatabaseTemplateMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: CreateDatabaseTemplateRequest) => {
      const res = await http.postAsync<CreateDatabaseTemplateRequest, any>('create_datastore_from_template', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}

export const useImportFileDatabaseMutation = () => {
  const { http, handleError } = useHttp();
  const headerConfig = {
    headers: {
        'x-device-id': 'stuff',
        'Content-Type': 'multipart/form-data'
    }
  }
  return useMutation(
    async (req: FormData) => {
      const res = await http.postAsync<FormData, any>('services/dataimport', req, headerConfig);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}

export const useDeleteDatabaseMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: DatabaseIdRequest) => {
      const res = await http.postAsync<DatabaseIdRequest, any>('delete_datastore', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};