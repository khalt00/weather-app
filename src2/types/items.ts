import { LanguageInterface } from 'types/applications'
import { GetSfNewActionSettingsResponse } from 'types/actions'
import { 
  DslookupInfoInterface, LabelInterface, FieldsInterface, FieldLayoutInterface,
  StatusesInterface, StatusOrderSettingsInterface 
} from 'types/databases'

export interface ItemInterface {
  status_id: string,
  p_id: string,
  d_id: string,
  a_id: string,
}

export interface CollectionIdRequest {
  collection_id: string
}

export interface NewItemRecordRequest {
  w_id: string,
  p_id: string,
  item_id: string,
  item: ItemInterface,
  a_id: string,
  d_id: string,
  status_id: string,
  user_id: string,
}

export interface GetPaginateItemsWithSearchRequest {
  project_id: string,
  datastore_id: string,
  conditions: Array<any>,
  page: number,
  per_page: number,
  sort_field_id?: string,
  sort_order?: string,
  return_count_only: boolean,
  omit_total_items: boolean,
  omit_fields_data?: boolean,
  use_or_codition?: boolean,
  set_as_default: boolean
}

export interface GetDatabaseItemDetailsRequest {
  datastore_id: string,
  item_id: string,
  include_linked_items: boolean
}

/* UpdatePostItemHistoryRequest */
interface HistoryRequestInterface {
  item_id: string,
  datastore_id: string,
  comment: string,
}

interface ChangeInterface {
  x: number,
  y: number,
  title: string,
  id: string,
  rowHeight: string,
  cols: number,
  rows: number,
  dataType: string,
  status: boolean,
  as_title: boolean,
  unique: boolean,
  value: string,
  tabindex: number,
  idx: number
}

export interface UpdatePostItemHistoryRequest {
  history: HistoryRequestInterface,
  changes: Array<ChangeInterface>,
  action_id: string,
  rev_no: number
}

/* RESPONSE */
/* GetPaginateItemsWithSearch */
export interface PaginateItemsParams {
  [key: string]: string,
  createdAt: string,
  createdBy: string,
  dId: string,
  iId: string,
  pId: string,
  revNo: string,
  seedIId: string,
  statusId: string,
  title: string,
  unread: string,
  updatedAt: string,
  updatedBy: string,
  wId: string,
}

export interface PaginateFieldsParams {
  asTitle: boolean,
  dataType: string,
  displayId: string,
  displayName: string,
  dsLookupInfo: any
  field: string,
  fieldIndex: number,
  name: LanguageInterface,
  order: number,
  search: boolean,
  showList: boolean,
}

export interface GetPaginateItemsWithSearchResponse {
  errors: Array<any>,
  items: Array<PaginateItemsParams>,
  fields?: Array<PaginateFieldsParams>,
  totalItems: number
}


/* GetCollectionItems */
export interface CollectionRowsInterface {
  id: string,
  datastoreID: string,
  row: Array<string>,
  imported: boolean,
  createdAt: string,
}

export interface MrowsInterface {
  [key: string]: string,
}

export interface CollectionInterface {
  id: string,
  deleted: boolean,
  imported: boolean,
  fields: Array<Array<string>>,
  rows: Array<CollectionRowsInterface>,
  status: number,
  filename: string,
  dataSource: string,
  isExternalService: boolean,
  mrows: Array<MrowsInterface>,
  excludeMrows: Array<MrowsInterface>
}

export interface GetCollectionItemsResponse {
  collection: CollectionInterface,
  error: any
}

export interface GetNewItemIdRespose {
  itemId: string
}

/* GetDatabaseItemDetailsReponse */
interface ColumnSettingsInterface {
  id: string,
  fId: string,
  wId: string,
  pId: string,
  dId: string,
  displayName: string,
  name: LanguageInterface,
  displayId: string,
  dataType: string,
  search: boolean,
  showList: boolean,
  asTitle: boolean,
  status: boolean,
  fieldIndex: number,
  titleOrder: number,
  fullText: boolean,
  unique: boolean,
  hideOnInput: boolean,
  hideFromApi: boolean,
  hasIndex: boolean,
  accessKeys: Array<string>,
  dslookupInfo: DslookupInfoInterface,
  selected?: string
}

interface TitleInterface {
  columnID: string,
  titleOrderNumber: number
}

interface AccessKeyInterface {
  accessKey: string,
  keyType: string,
  name: string,
}

interface LinksInterface {
  dId: string,
  iIds: Array<string>
}

interface ItemDetailsInterface {
  [key: string]: any,
  _id: string,
  accessKeys: Array<{
    [key: string]: AccessKeyInterface
  }>,
  createdAt: string,
  createdBy: string,
  dId: string,
  iId: string,
  labeledAt: string,
  labels: {
    [key: string]: string
  },
  links: Array<LinksInterface>,
  pId: string,
  pinned: boolean,
  revNo: number,
  seedIId: string,
  statusId: string,
  title: string,
  updatedAt: string,
  updatedBy: string,
  wId: string,
}

interface LabelLinksInterface {
  localLabelId: string,
  foreignLabelId: string,
}

interface RelatedInfoInterface {
  relatedDId: string,
  relationOrder: number,
  labelLinks: Array<LabelLinksInterface>
}

interface RelatedDatastoresInterface {
  dId: string,
  pId: string,
  wId: string,
  name: string,
  uploading: boolean,
  imported: boolean,
  noStatus: boolean,
  showInMenu: boolean,
  deleted: boolean,
  displayOrder: number,
  displayId: string,
  showOnlyDevMode: boolean,
  useQrDownload: boolean,
  useCsvUpdate: boolean,
  useExternalSync: boolean,
  useReplaceUpload: boolean,
  unread: number,
  invisible: boolean,
  useGridView: boolean,
  useGridViewByDefault: boolean,
  useBoardView: boolean,
  dataSource: string,
  isExternalService: boolean,
  showDisplayIdToList: boolean,
  showInfoToList: boolean,
  pjName: string,
  relationsInfo: RelatedInfoInterface
}

export interface GetDatabaseItemDetailsReponse {
  actions: Array<GetSfNewActionSettingsResponse>,
  columnSettings: Array<ColumnSettingsInterface>,
  datastoreDisplayId: string,
  datastoreId: string,
  error: any,
  errors: Array<any>,
  fieldLayout: {
    [key: string]: FieldLayoutInterface
  },
  fields: {
    [key: string]: FieldsInterface
  },
  itemDetails: ItemDetailsInterface,
  labels: Array<LabelInterface>,
  relatedDatastores: Array<RelatedDatastoresInterface>,
  stateflowActions: Array<GetSfNewActionSettingsResponse>,
  statusOrderSettings: {
    [key: string]: StatusOrderSettingsInterface
  },
  statuses: Array<{data: StatusesInterface}>,
  titles: Array<TitleInterface>
}


export interface RevNoResponseInterface {
  _id: string,
  revNo: number
}

export interface HistoryResponseInterface {
  historyId: string,
  workspaceId: string,
  projectId: string,
  datastoreId: string,
  datastoreName: string,
  itemId: string,
  iId: string,
  userId: string,
  UserObjID: string,
  username: string,
  email: string,
  mediaLink: string,
  actionId: string,
  transactionId: string,
  comment: string,
  postMode: string,
  postForRel: boolean,
  IsChanged: boolean,
  isFetchreplymail: boolean,
  createdAt: string,
  display_order: number,
  isNotify: boolean,
  updatedAt: string,
}

export interface UpdatePostItemHistoryResponse {
  error: string,
  itemHistory: HistoryResponseInterface,
  revNo: RevNoResponseInterface
}