import { Inject, Injectable } from '@nestjs/common';
import { ResourceNotFoundException } from '../exceptions';
import { ProviderToken } from '../enumerations';
import { IArtsRepository } from './interfaces/arts.repository.interface';

@Injectable()
export class ArtsService {
  constructor(
    @Inject(ProviderToken.IArtsRepository)
    private readonly artsRepository: IArtsRepository
  ) {}

  public async findAll(search: string) {
    return await this.artsRepository.findAll(search);
  }

  public async findOne(artId: number) {
    const art = await this.artsRepository.findOne(artId);
    if (!art) {
      throw new ResourceNotFoundException();
    }

    return art;
  }
}
