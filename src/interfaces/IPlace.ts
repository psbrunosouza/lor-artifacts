import { IDefault } from './IDefault';
import { IArtifacts } from './IArtifacts';

export interface IPlace extends IDefault {
  title: string;
  image: string;
  description: string;
  slug: string;
  artifact: IArtifacts[];
}
