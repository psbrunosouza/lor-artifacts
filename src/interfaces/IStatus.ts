import { IDefault } from './IDefault';
import { IArtifacts } from './IArtifacts';

export interface IStatus extends IDefault {
  title: 'special' | 'rare' | 'legend';
  description: string;
  color: string;
  image: string;
  slug: string;
  artifacts: IArtifacts[];
}
