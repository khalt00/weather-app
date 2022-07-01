import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp } from 'lib/http/useHttp';
import { 
  GetDashboardListResponse, GetDashboardSettingResponse,
  PostCreateDashboardRequest,PostUpdateDashboardRequest,
  DashboardIdRequest, GetDashboardLayoutsResponse
} from 'types/dashboards'
import { ProjectIdRequest } from 'types/projects'

export const useGetDashboardListQuery = (projectId: string) => {
  const { http, handleError } = useHttp();
  const params: ProjectIdRequest = {
    p_id: projectId
  }
  return useQuery(
    [QueryKey.dashboardList, params],
    async () => {
      const res = await http.getAsync<ProjectIdRequest, GetDashboardListResponse>(
        'get_dashboard_list', params
      );
      return res.data;
    },
    {
      enabled: !!projectId,
      onError: handleError,
    }
  );
}

export const useGetDashboardLayoutQuery = (dashboardId: string) => {
  const { http, handleError } = useHttp();
  const params: DashboardIdRequest = {
    b_id: dashboardId
  }
  return useQuery(
    [QueryKey.dashboardLayout, params],
    async () => {
      const res = await http.getAsync<DashboardIdRequest, GetDashboardLayoutsResponse>(
        'get_dashboard_layouts', params
      );
      return res.data;
    },
    {
      enabled: !!dashboardId,
      onError: handleError,
    }
  );
}

export const useGetDashboardSettingQuery = (type: number, dashboardId: string) => {
  const { http, handleError } = useHttp();
  const params: DashboardIdRequest = {
    b_id: dashboardId
  }
  return useQuery(
    [QueryKey.dashboardSetting, params],
    async () => {
      const res = await http.getAsync<DashboardIdRequest, GetDashboardSettingResponse>(
        'get_dashboard_settings', params
      );
      return res.data;
    },
    {
      enabled: type === 1 && !!dashboardId,
      onError: handleError,
    }
  );
}

/* MUTATION */
export const useCreateDashboardMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: PostCreateDashboardRequest) => {
      const res = await http.postAsync<PostCreateDashboardRequest, any>(
        'create_dashboard', req
      );
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const useUpdateDashboardMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: PostUpdateDashboardRequest) => {
      const res = await http.postAsync<PostUpdateDashboardRequest, any>(
        'update_dashboard', req
      );
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};

export const useDeleteDashboardMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: DashboardIdRequest) => {
      const res = await http.postAsync<DashboardIdRequest, any>(
        'delete_dashboard', req
      );
      return res.data;
    },
    {
      onError: handleError,
    }
  );
};
