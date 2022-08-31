export interface IArtifacts {
    id: number;
    path: string;
    status: 'special' | 'rare' | 'legend';
    image: string;
    power: number;
    type: string;
    title: string;
}