import { IResponse } from '../../../interfaces/IResponse';
import { AxiosResponse } from 'axios';
import api from '../index';

interface IHttp<T> {
  url: string;
  payload: T;
  params?: unknown;
}

export class HttpClient {
  get<T>(
    httpParams: Omit<IHttp<T>, 'payload'>
  ): Promise<AxiosResponse<IResponse<T>>> {
    return api.get<IResponse<T>>(httpParams.url, {
      params: httpParams.params,
    });
  }

  post<T>(httpParams: IHttp<T>): Promise<AxiosResponse<IResponse<T>>> {
    return api.post<IResponse<T>>(httpParams.url, httpParams.payload, {
      params: httpParams.params,
    });
  }

  delete<T>(
    httpParams: Omit<IHttp<T>, 'payload'>
  ): Promise<AxiosResponse<IResponse<T>>> {
    return api.delete<IResponse<T>>(httpParams.url, {
      params: httpParams.params,
    });
  }

  put<T>(httpParams: IHttp<T>): Promise<AxiosResponse<IResponse<T>>> {
    return api.put<IResponse<T>>(httpParams.url, httpParams.payload, {
      params: httpParams.params,
    });
  }

  patch<T>(httpParams: IHttp<T>): Promise<AxiosResponse<IResponse<T>>> {
    return api.patch<IResponse<T>>(httpParams.url, httpParams.payload, {
      params: httpParams.params,
    });
  }
}
