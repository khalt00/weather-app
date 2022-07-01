export interface Workspace {
  wId: string;
  name: string;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllWorkspacesResponse {
  currentWorkspaceId: string;
  workspaces: Workspace[];
}

export interface PostSetCurrentWorkspaceRequest {
  workspace_id: string;
  old_workspace_id: string;
}

export interface GetPasswordPolicyResponse {
  expiredDay: number,
  lockoutCount: number,
  lockoutTime: number,
  minLength: number,
  patternCheckType: number,
  sameLimit: number,
  useExpiredDay: boolean,
  useLockoutCount: boolean,
  useLockoutTime: boolean,
  useMinLength: boolean,
  usePatternCheck: boolean,
  useSameLimit: boolean
}

export interface PostAddWorkspaceRequest {
  name: string
}
