export enum ReactAppEnv {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export enum Locale {
  ja = 'ja',
}

export enum Path {
  portal = '/',
  signin = 'signin',
  signup = 'signup',
  businessProcess = 'business-process',
  passwordRecover = 'password-recover',
}

export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
  internalServerError = 500,
}

export enum ApiProxyBasePath {
  apicore = 'apicore',
  notificator = 'notificator',
}

export enum LocalStorageKey {
  token = 'token',
  currentWorkspaceId = 'currentWorkspaceId',
  currentApplicationId = 'currentApplicationId',
}

export enum RecoilAtomKey {
  token = 'token',
  userId = 'userId',
  currentWorkspaceId = 'currentWorkspaceId',
  currentApplicationId = 'currentApplicationId',
  messageQueue = 'messageQueue',
  unfinishedAsyncTaskCount = 'unfinishedAsyncTaskCount',
  currentTheme = 'currentTheme',
  userInfo = 'userInfo',
  groupType = 'groupType',
  groupData = 'groupData',
  groupUser = 'groupUser',
  showSideNav = 'showSideNav',
  showFilterPopup = 'showFilterPopup',
  showQueryPopup = 'showQueryPopup',
  sideNavAction = 'sideNavAction',
  dbItemDetails = 'dbItemDetails',
}

export enum QueryKey {
  currentUser = 'currentUser',
  workspaces = 'workspaces',
  applications = 'applications',
  tasks = 'tasks',
  templates = 'templates',
  groupTree = 'groupTree',
  groupUser = 'groupUser',
  userByGroup = 'userByGroup',
  passwordPolicy = 'passwordPolicy',
  projectList = 'projectList',
  projectRoles = 'projectRoles',
  dashboardList = 'dashboardList',
  dashboardLayout = 'dashboardLayout',
  dashboardSetting = 'dashboardSetting',
  userQueries = 'userQueries',
  queryConditions = 'queryConditions',
  databases = 'databases',
  databaseSetting = 'databaseSetting',
  databaseStatusAndOrder = 'databaseStatusAndOrder',
  databaseFieldsLayout = 'databaseFieldsLayout',
  collectionItems = 'collectionItems',
  actionAndFieldSettings = 'actionAndFieldSettings',
  sfNewActionSettings = 'sfNewActionSettings',
  newItemId = 'newItemId',
}
