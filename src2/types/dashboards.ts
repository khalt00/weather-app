import { LanguageInterface } from 'types/applications'

export interface DashboardIdRequest {
  b_id: string
}

export interface GetDashboardSettingResponse {
  name: LanguageInterface,
  pId: string,
  roles: Array<any>
}

export interface PostCreateDashboardRequest {
  name: LanguageInterface,
  display_order: number,
  p_id: string,
  roles: Array<any>
}

export interface PostUpdateDashboardRequest {
  name: LanguageInterface,
  b_id: string,
  roles: Array<any>
}

/* RESPONSE */

export interface GetDashboardListResponse {
  dashboards: Array<any>
}

export interface GetDashboardLayoutsResponse {
  name: string,
  dashboardLayouts: Array<any>
}
