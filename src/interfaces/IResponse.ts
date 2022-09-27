interface IMeta {
  pagination: IPagination;
}

interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface IDefault {
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IData<T> {
  id: number;
  attributes: T;
}

export interface IResponse<T> {
  data: IData<T>[];
  meta: IMeta;
}
