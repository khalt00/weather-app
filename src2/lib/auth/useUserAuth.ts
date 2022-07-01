import { useQueryClient } from "react-query";

import { useApplicationState } from "stores/applicationState";
import { useUserState } from "stores/userState";
import { useThemeState } from "stores/themeState";
import { useWorkspaceState } from "stores/workspaceState";

export const useUserAuth = () => {
  const { token, setToken, resetUserState } = useUserState();
  const { resetApplicationState } = useApplicationState();
  const { resetCurrentThemeState } = useThemeState();
  const { resetWorkspaceState } = useWorkspaceState();
  const queryClient = useQueryClient();

  const signedIn = (token: string) => {
    setToken(token);
  };

  const signedOut = () => {
    resetUserState();
    resetApplicationState();
    resetCurrentThemeState();
    resetWorkspaceState();
    queryClient.removeQueries();
  };

  return { token, signedIn, signedOut };
};
