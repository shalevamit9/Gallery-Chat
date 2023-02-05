import { Module } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { ArtsController } from './arts.controller';
import { InMemoryArtsRepository } from './repositories/in-memory-arts.repository';
import { ProviderToken } from '../enumerations';
import { ArtsGateway } from './arts.gateway';

@Module({
  controllers: [ArtsController],
  providers: [
    ArtsService,
    {
      provide: ProviderToken.IArtsRepository,
      useClass: InMemoryArtsRepository,
    },
    ArtsGateway,
  ],
})
export class ArtsModule {}
