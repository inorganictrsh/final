import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAlimentoDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 120)
  nombre_alimento: string;
}
