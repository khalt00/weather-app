export interface Application {
  applicationId: string;
  datastores: Datastore[];
  displayId: string;
  displayOrder: number;
  name: string;
  theme: string;
}

interface Datastore {
  dId: string;
  dataSource: string;
  deleted: boolean;
  displayId: string;
  displayOrder: number;
  imported: boolean;
  invisible: boolean;
  isExternalService: boolean;
  name: string;
  noStatus: boolean;
  pId: string;
  showDisplayIdToList: boolean;
  showInMenu: boolean;
  showInfoToList: boolean;
  showOnlyDevMode: boolean;
  unread: number;
  uploading: boolean;
  useBoardView: boolean;
  useCsvUpdate: boolean;
  useExternalSync: boolean;
  useGridView: boolean;
  useGridViewByDefault: boolean;
  useQrDownload: boolean;
  useReplaceUpload: boolean;
  wId: string;
}

export interface LanguageInterface {
  en: string,
  ja: string
}