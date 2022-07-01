import { useQuery, useMutation } from 'react-query';

import { QueryKey } from 'constants/appConstants';
import { useHttp } from 'lib/http/useHttp';
import { 
  NewItemRecordRequest, GetPaginateItemsWithSearchRequest, CollectionIdRequest, GetDatabaseItemDetailsRequest,
  GetCollectionItemsResponse, GetPaginateItemsWithSearchResponse, GetNewItemIdRespose, GetDatabaseItemDetailsReponse
} from 'types/items'
import { useDatabaseState } from 'stores/databaseStates'

export const useGetCollectionItemsQuery = (collectionId: string) => {
  const { http, handleError } = useHttp();
  const params: CollectionIdRequest = {
    collection_id: collectionId
  }
  return useQuery(
    [QueryKey.collectionItems, params],
    async () => {
      const res = await http.getAsync<CollectionIdRequest, GetCollectionItemsResponse>(
        'get_temp_collection_items', params
      );
      return res.data;
    },
    {
      enabled: !!collectionId,
      onError: handleError,
    }
  );
}

export const useGetNewItemIdQuery = () => {
  const { http, handleError } = useHttp();
  return useQuery(
    QueryKey.newItemId,
    async () => {
      const res = await http.getAsync<null, GetNewItemIdRespose>(
        'get_new_item_id'
      );
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}

export const useGetDatabaseItemDetailsQuery = (datastoreId: string, itemId: string) => {
  const { http, handleError } = useHttp();
  const { setDbItemDetails } = useDatabaseState()
  const params: GetDatabaseItemDetailsRequest = {
    datastore_id: datastoreId,
    item_id: itemId,
    include_linked_items: true
  }
  return useQuery(
    [QueryKey.collectionItems, params],
    async () => {
      const res = await http.getAsync<
        GetDatabaseItemDetailsRequest, GetDatabaseItemDetailsReponse>(
          'get_datastore_item_details', params
        );
      return res.data;
    },
    {
      enabled: !!datastoreId && !!itemId,
      onSuccess: (data) => setDbItemDetails(data),
      onError: handleError,
    }
  );
}

/* MUTATION */
export const useNewItemRecordMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: NewItemRecordRequest) => {
      const res = await http.postAsync<NewItemRecordRequest, any>(
        'new_item_record', req
      );
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}

export const useGetPaginateItemsWithSearchMutation = () => {
  const { http, handleError } = useHttp();
  return useMutation(
    async (req: GetPaginateItemsWithSearchRequest) => {
      const res = await http.postAsync<
        GetPaginateItemsWithSearchRequest, GetPaginateItemsWithSearchResponse
      >('get_paginate_items_with_search', req);
      return res.data;
    },
    {
      onError: handleError,
    }
  );
}

// export const useUpda