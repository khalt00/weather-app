import { useQuery } from "react-query";

import { QueryKey } from "constants/appConstants";
import { useHttp } from "lib/http/useHttp";
import { useApplicationState } from "stores/applicationState";
import { Application } from "types/applications";

export const useApplicationsQuery = () => {
  const { http, handleError } = useHttp();

  const { currentApplicationId, setCurrentApplicationId } =
    useApplicationState();
  return useQuery(
    QueryKey.applications,
    async () => {
      const res = await http.getAsync<null, Application[]>(
        "get_applications_list"
      );
      return res.data;
    },
    {
      onSuccess: (data) => {
        if (
          !data.some(
            ({ applicationId }) => applicationId === currentApplicationId
          )
        ) {
          setCurrentApplicationId(data[0]?.applicationId ?? "");
        }
      },
      onError: handleError,
    }
  );
};
