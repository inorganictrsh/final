import { Module } from '@nestjs/common';
import { ColegioService } from './colegio.service';
import { ColegioController } from './colegio.controller';

@Module({
  controllers: [ColegioController],
  providers: [ColegioService],
})
export class ColegioModule {}
