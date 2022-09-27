import { IDefault } from './IDefault';

export interface ICategories extends IDefault {
  attributes: {
    title: string;
    image: string;
  };
}
