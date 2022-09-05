import { AxiosResponse } from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
  const { data: apiResponse } = response;

  response.data.data = apiResponse.data.map((value: any) => ({
    id: value.id,
    ...value.attributes,
  }));

  return response;
};
