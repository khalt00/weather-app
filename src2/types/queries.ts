export interface QueryIdRequest {
  q_id: string
}

/* RESPONSE */
export interface UserQueriesCondition {
  searchValue: Array<any>,
  includeNull: boolean,
  dataType: string,
  id: string,
  data?: any
}

export interface QueryCondition {
  id: string,
  searchValue: Array<any>,
  exactMatch: boolean,
  includeNull: boolean,
  notMatch: boolean,
  dataType?: any
}

export interface QueryConditionWithIndex {
  index: number,
  data: QueryCondition
}

export interface GetUserQueriesResponse {
  pId?: string,
  dId?: string,
  qId: string,
  id: string,
  workspaceId: string,
  projectId: string,
  datastoreId: string,
  userId: string,
  name: string,
  desc: string,
  searchKey: string,
  roles: Array<any>,
  showInHome: boolean,
  displayOrder: number,
  conditions: Array<UserQueriesCondition>,
  useOrCondition: boolean,
  CreatedBy: string,
  createdAt: string,
  UpdatedBy: string,
  updatedAt: string
}

export interface GetQueryConditionsResponse {
  qId: string,
  id: string,
  workspaceId: string,
  projectId: string,
  datastoreId: string,
  userId: string,
  name: string,
  desc: string,
  searchKey: string,
  roles: Array<any>,
  showInHome: boolean,
  displayOrder: number,
  useOrCondition: boolean,
  CreatedBy: string,
  createdAt: string,
  UpdatedBy: string,
  updatedAt: string,
  conditions?: Array<QueryCondition>
}