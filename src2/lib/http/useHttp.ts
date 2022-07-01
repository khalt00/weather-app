/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect } from 'react';

import { HttpStatusCode } from 'constants/appConstants';
import { useUserAuth } from 'lib/auth/useUserAuth';
import instance from 'lib/axios/axios';
import instanceV0 from 'lib/axios/axiosV0';
// import { useMessageQueueState } from 'stores/messageQueueState';

export const useHttp = (type?: string) => {
  const { token, signedOut } = useUserAuth();
  // const { enqueueMessage } = useMessageQueueState();

  useEffect(() => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token]);

  const getAsync = <Req, Res>(
    path: string,
    params?: Req,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Res, any>> =>
    instance.get<Req, AxiosResponse<Res>>(path, { params, ...config });

  const postAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig) =>
    instance.post<Req, AxiosResponse<Res>>(path, data, config);

  const putAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig): Promise<AxiosResponse<Res, any>> =>
    instance.put<Req, AxiosResponse<Res>>(path, data, config);

  const deleteAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
    instance.delete<Req, AxiosResponse<Res>>(path, { data: data });

  const patchAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
    instance.patch<Req, AxiosResponse<Res>>(path, data);

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status } = error.response;
        switch (status) {
          case HttpStatusCode.unauthorized:
            signedOut();
            break;
          default:
            // handle error here
            // enqueueMessage({
            //   message: '予期しないエラーが発生しました。',
            //   notAllowDuplicate: true,
            // });
            break;
        }
      }
    }
  };

  return { http: { getAsync, postAsync, putAsync, deleteAsync, patchAsync }, handleError };
};

export const useHttpV0 = (type?: string) => {
  const { token, signedOut } = useUserAuth();

  useEffect(() => {
    instanceV0.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token]);

  const getAsync = <Req, Res>(
    path: string,
    params?: Req,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Res, any>> =>
    instanceV0.get<Req, AxiosResponse<Res>>(path, { params, ...config });

  const postAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig) =>
    instanceV0.post<Req, AxiosResponse<Res>>(path, data, config);

  const putAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig): Promise<AxiosResponse<Res, any>> =>
    instanceV0.put<Req, AxiosResponse<Res>>(path, data, config);

  const deleteAsync = <Req, Res>(path: string, data?: Req): Promise<AxiosResponse<Res, any>> =>
    instanceV0.delete<Req, AxiosResponse<Res>>(path, { data: data });

  const patchAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
    instanceV0.patch<Req, AxiosResponse<Res>>(path, data);

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status } = error.response;
        switch (status) {
          case HttpStatusCode.unauthorized:
            signedOut();
            break;
          default:
            // handle error here
            // enqueueMessage({
            //   message: '予期しないエラーが発生しました。',
            //   notAllowDuplicate: true,
            // });
            break;
        }
      }
    }
  };

  return { http: { getAsync, postAsync, putAsync, deleteAsync, patchAsync }, handleError };
};