import { IDefault } from './IDefault'

export interface IArtifacts extends IDefault {
  path: string
  status: 'special' | 'rare' | 'legend'
  image: string
  power: number
  type: string
  title: string
}
