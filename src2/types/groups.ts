export interface CreateTopGroupRequest {
  workspace_id: string,
  data: any
}

export interface UpdateGroupRequest {
  workspace_id: string,
  group_id: string,
  data: any
} 

export interface GetUsersByGroupRequest {
  admin_only: boolean,
  workspace_id: string
}

export interface AddUserToGroupRequest {
  email: string,
  g_id: string, 
  w_id: string,
  username: string,
}

export interface RemoveUserFromGroupRequest {
  w_id: string,
  g_id: string,
  u_id: string
}