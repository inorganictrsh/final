import { Alimento } from 'src/modules/alimento/entities/alimento.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Entrega {
  @PrimaryGeneratedColumn()
  id_entrega: number;

  @Column({ type: 'int', default: 1 })
  cantidad: number;

  @Column({ type: 'timestamp' })
  hora_entrega: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  emisor: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  receptor: User;

  @ManyToOne(() => Alimento, (alimento) => alimento.id_alimento)
  Alimento: Alimento;
}
