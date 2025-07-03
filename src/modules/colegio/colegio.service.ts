import { Injectable } from '@nestjs/common';
import { CreateColegioDto } from './dto/create-colegio.dto';
import { UpdateColegioDto } from './dto/update-colegio.dto';

@Injectable()
export class ColegioService {
  create(createColegioDto: CreateColegioDto) {
    return 'This action adds a new colegio';
  }

  findAll() {
    return `This action returns all colegio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colegio`;
  }

  update(id: number, updateColegioDto: UpdateColegioDto) {
    return `This action updates a #${id} colegio`;
  }

  remove(id: number) {
    return `This action removes a #${id} colegio`;
  }
}
