import { IDefault } from './IDefault';
import { IClassification } from './IClassification';
import { ICategories } from './ICategories';
import { IPlace } from './IPlace';

export interface IArtifacts extends IDefault {
  attributes: {
    path: string;
    image: string;
    power: number;
    title: string;
    artifact_status: { data: IClassification };
    category: { data: ICategories };
    place: { data: IPlace };
  };
}
