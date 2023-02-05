import { Art } from '../types/arts.type';

export interface IArtsRepository {
  findAll(search: string): Promise<Art[]>;
  findOne(artId: number): Promise<Art>;
}
