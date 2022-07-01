import { LanguageInterface } from 'types/applications'
import { QueryCondition } from 'types/queries'

export interface DatabaseIdRequest {
  datastore_id: string
}

export interface CreateDatabaseTemplateRequest {
  user_id: string,
  workspace_id: string,
  project_id: string,
  template_name: string,
  lang_cd: string
}

/* RESPONSE */
export interface LabelInterface {
  labelId: string,
  name: string,
  color: string,
  displayOrder: number,
  fieldIds: Array<string>
}

export interface GetDatabasesResponse {
  datastoreId: string,
  name: string,
  displayId: string,
  deleted: boolean,
  imported: boolean,
  uploading: boolean
}

export interface GetDatabaseSettingResponse {
  dId: string,
  pId: string
  wId: string,
  name: LanguageInterface,
  roles: Array<string>,
  uploading: boolean,
  imported: boolean,
  noStatus: boolean,
  showInMenu: boolean,
  displayOrder: number,
  deleted: boolean,
  createdAt: string,
  updatedAt: string,
  encoding: string,
  failed: boolean,
  progress: number,
  displayId: string,
  showOnlyDevMode: boolean,
  useQrDownload: boolean,
  useCsvUpdate: boolean,
  useExternalSync: boolean,
  useReplaceUpload: boolean,
  labels: Array<LabelInterface>,
  invisible: boolean,
  useGridView: boolean,
  useGridViewByDefault: boolean,
  useBoardView: boolean,
  useStatusUpdate: boolean,
  isExtendLimitTextarea: boolean,
  extendLimitTextareaLength: number,
  dataSource: string,
  isExternalService: boolean,
  showDisplayIdToList: boolean,
  showInfoToList: boolean,
  defaultSearchConditions?: Array<QueryCondition>
}


/* GetDatabaseFieldsLayoutResponse */
export interface StatusesInterface {
  id: string,
  color: string,
  sId: string,
  displayId: string,
  name: string,
}

export interface StatusOrderSettingsInterface {
  col: number,
  cols: number,
  id: string,
  row: number,
  rows: number,
  sId: string,
  sizeX: number,
  sizeY: number,
  sortId: number,
  x: number,
  y: number
}

export interface GetDatabaseStatusAndOrderResponse {
  statusOrderSettings: {
    [key: string]: StatusOrderSettingsInterface
  },
  statuses: Array<StatusesInterface>
}


/* GetDatabaseFieldsLayoutResponse */
interface OptionInterface {
  oId: string,
  sortId: number,
  color: string,
  value: string,
  enabled: boolean,
  displayId: string,
}

export interface DslookupInfoInterface {
  dslookupDatastoreId: string,
  dslookupFieldId: string,
  dslookupProjectId: string,
}

export interface FieldsInterface {
  accessKeys: Array<string>,
  asTitle: boolean,
  dId: string,
  dataType: string,
  displayId: string,
  displayName: string,
  dslookupInfo?: DslookupInfoInterface,
  fId: string,
  fieldIndex: number,
  fullText: boolean,
  hasIndex: boolean,
  hideOnInput: boolean,
  hideFromApi: boolean,
  id: string,
  name: LanguageInterface,
  pId: string,
  search: boolean,
  showList: boolean,
  status: boolean,
  titleOrder: number,
  unique: boolean,
  wId: string,
  options?: Array<OptionInterface>,
}

export interface FieldLayoutInterface {
  _key: string,
  col: number,
  createdAt: string,
  displayId: string,
  id: string,
  row: number,
  sizeX: number,
  sizeY: number,
  updatedAt: string,
}
export interface GetDatabaseFieldsLayoutResponse{
  fields: {
    [key: string]: FieldsInterface
  },
  fieldLayout: {
    [key: string]: FieldLayoutInterface
  }
}