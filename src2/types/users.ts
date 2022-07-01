export interface TokenAuthRequest {
  email: string;
  password: string;
}

export interface TokenAuthResponse {
  token: string;
}

export interface CurrentUserResponse {
  user: UserInfoData;
}

export interface ChangeUserInfoRequest {
  username: string,
  email?: string,
  user_id?: string
}

export interface ChangePasswordRequest {
  confirm_password: string,
  new_password: string,
  old_password: string
}

export interface UserInfoData {
  currentWorkspaceId: string;
  email: string;
  isAdmin: {
    [applicationId: string]: boolean;
  };
  profilePic: {
    selfLink: string;
    mediaLink: string;
  };
  mediaLink: string;
  selfLink: string;
  uId: string;
  username: string;
  wsAdmin: boolean;
}