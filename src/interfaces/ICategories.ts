import { IDefault } from './IDefault';
import { IArtifacts } from './IArtifacts';

export interface ICategories extends IDefault {
  title: string;
  image: string;
  slug: string;
  description: string;
  color: string;
  artifacts: IArtifacts[];
}
