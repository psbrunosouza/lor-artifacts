import { IDefault } from './IDefault';
import { IStatus } from './IStatus';
import { ICategories } from './ICategories';
import { IPlace } from './IPlace';

export interface IArtifacts extends IDefault {
  image: string;
  power: number;
  title: string;
  description: string;
  slug: string;
  artifactStatus: IStatus;
  category: ICategories;
  place: IPlace;
}
