import { IDefault } from './IDefault';

export interface IClassification extends IDefault {
  attributes: {
    title: 'special' | 'rare' | 'legend';
    description: string;
    color: string;
    image: string;
  };
}
