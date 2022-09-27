import { IDefault } from './IDefault';

export interface IPlace extends IDefault {
  attributes: {
    title: string;
    image: string;
    description: string;
  };
}
