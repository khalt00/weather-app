import { LanguageInterface } from "types/applications";

export interface GetActionAndFieldSettingsRequest {
  datastore_id: string;
  action_id: string;
}

/* RESPONSE */
/* GetActionAndFieldSettingsResponse */
interface PublishToRolesInterface {
  _key: string;
  accessKey: string;
  createdAt: string;
  displayId: string;
  hasRelation: boolean;
  id: string;
  name: string;
  projectId: string;
  rId: string;
  type: string;
}

interface PublishToGroupsInterface {
  accessKey: string;
  createdAt: string;
  disableUiAccess: boolean;
  displayId: string;
  gId: string;
  hasRelation: boolean;
  id: string;
  index: number;
  isRoot: boolean;
  name: string;
}

interface ActionInterface {
  _key: string;
  aId: string;
  dId: string;
  isStatusAction: boolean;
  displayOrder: number;
  description: string;
  operation: string;
  setStatus: string;
  isOwnedBySystem: boolean;
  isPublishToMyGroups: boolean;
  isNotifyToGroups: boolean;
  isNotifyToRoles: boolean;
  isNotifyToUsers: boolean;
  isNotifyEmailToGroups: boolean;
  isNotifyEmailToRoles: boolean;
  createdAt: string;
  updatedAt: string;
  publishToRoles: Array<PublishToRolesInterface>;
  publishToGroups: Array<PublishToGroupsInterface>;
}

interface ActionFieldsInterface {
  accessKeys: Array<string>;
  asTitle: boolean;
  columnId: string;
  dId: string;
  dataType: string;
  displayId: string;
  displayName: string;
  fId: string;
  fieldIndex: number;
  fullText: boolean;
  hasIndex: boolean;
  hideOnInput: boolean;
  hideFromApi: boolean;
  id: string;
  mandatory: boolean;
  name: LanguageInterface;
  pId: string;
  search: boolean;
  show: boolean;
  showList: boolean;
  status: boolean;
  titleOrder: string;
  unique: boolean;
  update: boolean;
  wId: string;
}

interface ActionFieldSettingsInterface {
  columnId: string;
  show: boolean;
  update: boolean;
  mandatory: boolean;
}

export interface GetActionAndFieldSettingsResponse {
  action: ActionInterface;
  actionFields: {
    [key: string]: ActionFieldsInterface;
  };
  actionFieldSettings: {
    [key: string]: ActionFieldSettingsInterface;
  };
}

/* GetSfNewActionSettingsResponse */
export interface GetSfNewActionSettingsResponse {
  _id: string;
  aId: string;
  accessKeys: Array<string>;
  createdAt: string;
  dId: string;
  description: string;
  displayId: string;
  displayOrder: number;
  isOwnedBySystem: boolean;
  isStatusAction: boolean;
  name: string;
  operation: string;
  pId: string;
  setStatus: string;
  slackChannels: any;
  updatedAt: string;
  userSlacCchannels: any;
  wId: string;
}
