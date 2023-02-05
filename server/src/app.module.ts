import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArtsModule } from './arts';
import configuration from './config/configuration';

@Module({
  imports: [
    ArtsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
