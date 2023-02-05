import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { NotFoundInterceptor } from '../interceptors';
import { ArtsService } from './arts.service';

@Controller('arts')
export class ArtsController {
  constructor(private readonly artsService: ArtsService) {}

  @Get()
  public async getAllArts(@Query('search') search: string) {
    return await this.artsService.findAll(search);
  }

  @UseInterceptors(NotFoundInterceptor)
  @Get(':id')
  public async getArtById(@Param('id') artId: number) {
    return await this.artsService.findOne(artId);
  }
}
