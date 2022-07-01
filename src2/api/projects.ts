import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp } from 'lib/http/useHttp';
import { 
  CreateProjectRequest,
  ProjectIdRequest, GetProjectListResponse,
  GetProjectRolesRequest, GetProjectRolesResponse
} from 'types/projects'

export const useGetProjectListQuery = (projectId: string) => {
  const { http, handleError } = useHttp();
  const params: ProjectIdRequest = {
    p_id: projectId
  }
  return useQuery(
    [QueryKey.projectList, params],
    async () => {
      const res = await http.getAsync<ProjectIdRequest, GetProjectListResponse>('get_project_settings', params);
      return res.data;
    },
    {
      enabled: !!projectId,
      onError: handleError,
    }
  );
}

export const useGetProjectRolesQuery = (projectId: string) => {
  const { http, handleError } = useHttp();
  const params: GetProjectRolesRequest = {
    project_id: projectId
  }
  return useQuery(
    [QueryKey.projectRoles, params],
    async () => {
      const res = await http.getAsync<
       GetProjectRolesRequest, Array<GetProjectRolesResponse>
      >('get_project_roles', params);
      return res.data;
    },
    {
      enabled: !!projectId,
      onError: handleError,
    }
  );
}

/* MUTATION */
export const useCreateProjectMutation = () => {
  const { http } = useHttp();

  return useMutation(
    async (req: CreateProjectRequest) => {
      const res = await http.postAsync<CreateProjectRequest, any>('post_create_project', req);
      return res.data;
    }
  );
};