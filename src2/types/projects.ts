import { LanguageInterface } from 'types/applications'

export interface ProjectIdRequest {
  p_id: string
}

export interface CreateProjectRequest {
  name: LanguageInterface;
  workspace_id: string;
  tp_id?: string;
}

export interface GetProjectRolesRequest {
  project_id: string
}

/* RESPONSE */
export interface CustomMenuItem {
  menuName: string,
  directiveName: string,
  hide: boolean,
  builtInMenu: boolean
}

export interface GetProjectListResponse {
  customMenus: Array<CustomMenuItem>
  name: LanguageInterface
}

export interface GetProjectRolesResponse {
  id: string,
  displayId: string,
  name: string
}
